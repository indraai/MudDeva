// Copyright (c)2022 Quinn Michaels. All rights reserved.

module.exports = {
  /**************
  func: play
  params: packet
  describe: The main function to login/play the mud realm. This will look at your
  client config to get the username/password and necessary configuration to paly.
  ***************/
  play(packet) {

    // set the variable accounts so we can play with many test accounts and the admin
    if (packet.q.text) {
      const is_valid = this.client.services.mud[packet.q.text] ? true : false;
      this.client.services.mud.key = is_valid ? packet.q.text : this.client.services.mud.key;
    }

    return new Promise((resolve, reject) => {
      if (!this.client.services.mud) return resolve(this.vars.messages.no_service);
      this.func.state('connect');
      // this sends a open port message to the server with a custom event relay to the mud server
      const text = `#telnet open:${this.agent.key} ${this.client.services.mud.host}:${this.client.services.mud.port} ${this.vars.relay}`;
      this.question(text).then(connect => {
        this.func.state('connected');
        return resolve({
          text: connect.a.text,
          html: connect.a.html,
          data: connect.a.data,
        });
      }).catch(reject);
    });
  },

  /**************
  func: write
  params: cmd, text
  describe: The write function takes two parameters cmd and text. The cmd determines
  if it is sending a command to the server with a text message or just a text
  message.
  ***************/
  write(cmd=false, text='') {
    const id = this.uid();
    const orig = text;
    const passStates = ['connecting','login','password','adventure'];
    const passState = passStates.includes(this.vars.state.key);
    this.vars.cmd = cmd || 'terminal';

    return new Promise((resolve, reject) => {
      text = cmd ? `#telnet write:${this.agent.key} ${cmd} ${text}` : `#telnet write:${this.agent.key} ${text}`;
      this.question(text).then(answer => {
        answer.a.agent = this.agent;
        answer.a.meta.key = this.agent.key;
        answer.a.meta.method = this.vars.cmd;
        answer.a.created = Date.now();
        return resolve({
          text: answer.a.text,
          html: answer.a.html,
          data: answer.a.data,
        });
      }).catch(reject);
    });
  },

  /**************
  func: state
  params: key
  describe: Set the state of the mud deva with a value key that aligns to the messages
  array in the agent variables.
  ***************/
  state(key) {
    this.vars.state_prev = this.vars.state;
    let value = this.vars.messages[key];
    value = value.replace(/:name:/g, this.vars.adventure.name).replace(/:login:/g, this.vars.adventure.login);
    this.vars.state = {
      key,
      value,
    };
    return Promise.resolve(this.vars.state);
  },

  /**************
  func: terminal
  params: opts
  describe: The terminal function will take an options object and then pass the
  associated values to the terminal for both the socket and the prompt.
  ***************/
  terminal(opts) {
    if (!opts) return;
    opts.a.text = this.agent.parse(opts.a.text);
    if (!opts.a.text) return;

    // opts.q = this.lib.copy(opts.a);
    this.question(`#feecting parse:${this.agent.key}:${this.vars.adventure.key}:terminal ${opts.a.text}`).then(parsed => {
      opts.a = {
        agent: this.agent,
        client: this.client,
        meta: {
          key: this.agent.key,
          method: this.vars.cmd || 'terminal',
          adventure: this.vars.adventure,
          state: this.vars.state,
        },
        text: parsed.a.text,
        html: parsed.a.html,
        data: opts.a.data || parsed.a.data,
        created: Date.now(),
      }
      this.talk(`socket:terminal`, opts);
      this.prompt(parsed.a.text);
      this.vars.cmd = 'terminal'; // reset the cmd back to termianl
      return;
    }).catch(err => {
      this.talk('error', {
        id: this.uid(),
        agent: this.agent,
        client: this.client,
        error: err.toString(),
        created: Date.now(),
      })
    });
  },

  /**************
  func: system
  params: data
  describe: broadcast a system message over the which will be recieved by the
  socket deva and that will then be broadcast over the clients private socket
  to their interface.
  ***************/
  system(data={}) {
    const id = this.uid();
    data.state = data.state || this.vars.state;
    data.adventure = this.vars.adventure;

    this.talk('system', {
      id,
      event: data.event || this.agent.key,
      client: this.client,
      agent: this.agent,
      data,
      created: Date.now()
    });
    return;
  },

  /**************
  method: patternMatch
  params: text, alert
  describe: The pattern match function is a utility function used to match pattern
  from the listers portion.
  ***************/
  patternMatch(text, alert) {
    const reg = new RegExp(alert.reg, 'mi');
    const matcher = {
      name: alert.name,
      regex: alert.reg,
      matched: text.match(reg),
    }
    return matcher.matched ? matcher : false;
  },

  /**************
  func: patternMatchLoop
  params: opts
  describe: patternMatchLoop: takes a packet delivered from the patterns
  function and loops over the data looking for alert strings as defined in the
  data.json file if the loop finds a match from the data.json file then it
  extracts the string and forwards it to the socket socket funcntion with the
  necessary options.
  ***************/
  patternMatchLoop(opts) {
    const {patterns} = this.vars.adventure;
    const { prompt, socket, patternMatch } = this.func;
    let patternTrack = 0;
    patterns.forEach(pat => {
      const patmat = patternMatch(opts.a.text, pat);
      if (patmat) {
        patternTrack = patternTrack + 1
        opts.a.text = opts.a.text.replace(patmat.matched[0], '');
        this.func.system({
          event: `${this.agent.key}:pattern`,
          state: pat.name,
          pattern: patmat,
          text: patmat.matched[0],
          created: Date.now(),
        });
      }
    });
    if (!patternTrack) return Promise.resolve(opts);
    return this.func.patternMatchLoop(opts)
  },

  /**************
  func: patterns
  params: packet
  describe: _listeners.js when the game server delivers a packet. when the
  packet is recieved from listeners this fires and then runs a recursive loop
  function alertsMathLoop
  ***************/
  patterns(packet) {
    return this.func.patternMatchLoop(packet);
  },

  /***********
    func: triggers
    params: text
    describe: extracts triggers from a text string.
  ***********/
  triggers(text) {
    const {key} = this.client.services.mud;
    // check for login trigger
    if (text.includes('trigger:login')) {
      this.func.write(false, this.client.services.mud[key].login);
    }
    else if (text.includes('trigger:password')) {
      this.func.write(false, this.client.services.mud[key].password);
    }
    else if (text.includes('trigger:return')) {
      this.func.write(false, '\n\r');
    }
  },

}
