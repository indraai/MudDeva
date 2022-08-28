// Copyright (c)2022 Quinn Michaels. All Rights Reserved.
// The Mud Deva Methods

module.exports = {

  /**************
  method: play
  params: packet
  describe: Call the play function with the packet data.
  ***************/
  'play'(packet) {
    return this.func.play(packet);
  },

  /**************
  method: >
  params: packet
  describe: Shortcut method to call write function.
  ***************/
  '>'(packet) {
    return this.func.write(false, packet.q.text);
  },

  /**************
  method: !
  params: packet
  describe: Call the write function with ! command.
  ***************/
  '!'(packet) {
    return this.func.write('!', packet.q.text);
  },

  /**************
  method: ln
  params: packet
  describe: Call the play function with the packet data.
  ***************/

  ln(packet) {
    packet.q.text = '\\r';
    return this.func.write(false, packet.q.text);
  },

  /**************
  method: save
  params: packet
  describe: Call the save function with the packet data.
  ***************/
  save(packet) {
    return this.func.write('save', packet.q.text);
  },

  /**************
  method: quit
  params: packet
  describe: Call the quit function with the packet data.
  ***************/
  quit(packet) {
    return this.func.write('quit', packet.q.text);
  },


  /**************
  method: mhelp
  params: packet
  describe: Call the mhelp function with the packet data.
  ***************/
  mhelp(packet) {
    return this.func.write('help', packet.q.text)
  },

  /**************
  method: commands
  params: packet
  describe: Call the commands function with the packet data to list mud commands.
  ***************/
  commands(packet) {
    return this.func.write('commands', packet.q.text);
  },

  /**************
  method: where
  params: packet
  describe: Call the where function with the packet data.
  ***************/
  where(packet) {
    return this.func.write('where', packet.q.text);
  },

  /**************
  method: time
  params: packet
  describe: Call the time function with the packet data.
  ***************/
  time(packet) {
    return this.func.write('time', packet.q.text);
  },

  /**************
  method: news
  params: packet
  describe: Call the news function with the packet data.
  ***************/
  news(packet) {
    return this.func.write('news', packet.q.text);
  },

  /**************
  method: motd
  params: packet
  describe: Call the motd function with the packet data.
  ***************/
  motd(packet) {
    return this.func.write('motd', packet.q.text);
  },

  /**************
  method: north
  params: packet
  describe: Call the north function with the packet data.
  ***************/
  north(packet) {
    return this.func.write('north');
  },
  n(packet) {
    return this.methods.north(packet);
  },

  /**************
  method: south
  params: packet
  describe: Call the south function with the packet data.
  ***************/
  south(packet) {
    return this.func.write('south');
  },
  s(packet) {
    return this.methods.south(packet);
  },

  /**************
  method: east
  params: packet
  describe: Call the east function with the packet data.
  ***************/
  east(packet) {
    return this.func.write('east');
  },
  e(packet) {
    return this.methods.east(packet);
  },

  /**************
  method: west
  params: packet
  describe: Call the west function with the packet data.
  ***************/
  west(packet) {
    return this.func.write('west');
  },
  w(packet) {
    return this.methods.west(packet);
  },

  /**************
  method: southwest
  params: packet
  describe: Call the southwest function with the packet data.
  ***************/
  southwest(packet) {
    return this.func.write('southwest');
  },
  sw(packet) {
    return this.methods.southwest(packet);
  },

  /**************
  method: southeast
  params: packet
  describe: Call the southeast function with the packet data.
  ***************/
  southeast(packet) {
    return this.func.write('southeast');
  },
  se(packet) {
    return this.methods.southeast(packet);
  },

  /**************
  method: northeast
  params: packet
  describe: Call the northeast function with the packet data.
  ***************/
  northeast(packet) {
    return this.func.write('northeast');
  },
  ne(packet) {
    return this.methods.northeast(packet);
  },

  /**************
  method: northwest
  params: packet
  describe: Call the northwest function with the packet data.
  ***************/
  northwest(packet) {
    return this.func.write('northwest');
  },
  nw(packet) {
    return this.methods.northwest(packet);
  },


  /**************
  method: up
  params: packet
  describe: Call the up function with the packet data.
  ***************/
  up(packet) {
    return this.func.write('up');
  },
  u(packet) {
    return this.methods.up(packet);
  },

  /**************
  method: down
  params: packet
  describe: Call the down function with the packet data.
  ***************/
  down(packet) {
    return this.func.write('down');
  },
  d(packet) {
    return this.methods.down(packet);
  },

  /**************
  method: yes
  params: packet
  describe: Call the yes function with the packet data.
  ***************/
  yes(packet) {
    return this.func.write('yes', false);
  },

  /**************
  method: no
  params: packet
  describe: Call the no function with the packet data.
  ***************/
  no(packet) {
    return this.func.write('no', false);
  },

  /**************
  method: follow
  params: packet
  describe: Call the follow function with the packet data.
  ***************/
  follow(packet) {
    return this.func.write('follow', packet.q.text);
  },


  /**************
  method: hit
  params: packet
  describe: Call the hit function with the packet data.
  ***************/
  hit(packet) {
    return this.func.write('hit', packet.q.text);
  },

  /**************
  method: kick
  params: packet
  describe: Call the kick function with the packet data.
  ***************/
  kick(packet) {
    return this.func.write('kick', packet.q.text);
  },

  /**************
  method: tackle
  params: packet
  describe: Call the tackle function with the packet data.
  ***************/
  tackle(packet) {
    return this.methods.hit(packet);
  },

  /**************
  method: fight
  params: packet
  describe: Call the fight function with the packet data.
  ***************/
  fight(packet) {
    return this.methods.hit(packet);
  },

  /**************
  method: info
  params: packet
  describe: Call the info function with the packet data.
  ***************/
  info(packet) {
    return this.func.write('info', packet.q.text);
  },

  /**************
  method: look
  params: packet
  describe: Call the look function with the packet data.
  ***************/
  look(packet) {
    return this.func.write('look', packet.q.text);
  },

  /**************
  method: scan
  params: packet
  describe: Call the scan function with the packet data.
  ***************/
  scan(packet) {
    return this.func.write('scan', packet.q.text);
  },

  /**************
  method: list
  params: packet
  describe: Call the list function with the packet data.
  ***************/
  list(packet) {
    return this.func.write('list', packet.q.text)
  },

  /**************
  method: exits
  params: packet
  describe: Call the exits function with the packet data.
  ***************/
  exits(packet) {
    return this.func.write('exits', packet.q.text);
  },

  /**************
  method: goto
  params: packet
  describe: Call the goto function with the packet data.
  ***************/
  goto(packet) {
    return this.func.write('goto', packet.q.text);
  },

  /**************
  method: offer
  params: packet
  describe: Call the offer function with the packet data.
  ***************/
  offer(packet) {
    return this.func.write('offer', packet.q.text);
  },

  /**************
  method: rent
  params: packet
  describe: Call the rent function with the packet data.
  ***************/
  rent(packet) {
    return this.func.write('rent', packet.q.text);
  },

  /**************
  method: buy
  params: packet
  describe: Call the buy function with the packet data.
  ***************/
  buy(packet) {
    return this.func.write('buy', packet.q.text);
  },

  /**************
  method: spell
  params: packet
  describe: Call the spell function with the packet data.
  ***************/
  sell(packet) {
    return this.func.write('sell', packet.q.text);
  },

  /**************
  method: value
  params: packet
  describe: Call the value function with the packet data.
  ***************/
  value(packet) {
    return this.func.write('value', packet.q.text);
  },

  /**************
  method: lock
  params: packet
  describe: Call the lock function with the packet data.
  ***************/
  lock(packet) {
    return this.func.write('lock', packet.q.text);
  },

  /**************
  method: unlock
  params: packet
  describe: Call the unlock function with the packet data.
  ***************/
  unlock(packet) {
    return this.func.write('unlock', packet.q.text);
  },

  /**************
  method: open
  params: packet
  describe: Call the open function with the packet data.
  ***************/
  open(packet) {
    return this.func.write('open', packet.q.text);
  },

  /**************
  method: close
  params: packet
  describe: Call the close function with the packet data.
  ***************/
  close(packet) {
    return this.func.write('close', packet.q.text);
  },

  /**************
  method: enter
  params: packet
  describe: Call the enter function with the packet data.
  ***************/
  enter(packet) {
    return this.func.write('enter', packet.q.text);
  },

  /**************
  method: leave
  params: packet
  describe: Call the leave function with the packet data.
  ***************/
  leave(packet) {
    return this.func.write('leave', packet.q.text);
  },

  /**************
  method: flee
  params: packet
  describe: Call the flee function with the packet data.
  ***************/
  flee(packet) {
    return this.func.write('flee', packet.q.text);
  },

  /**************
  method: con
  params: packet
  describe: Call the con function with the packet data.
  ***************/
  con(packet) {
    return this.func.write('consider', packet.q.text);
  },

  /**************
  method: get
  params: packet
  describe: Call the get function with the packet data.
  ***************/
  get(packet) {
    return this.func.write('get', packet.q.text);
  },

  /**************
  method: take
  params: packet
  describe: Call the take function with the packet data.
  ***************/
  take(packet) {
    return this.func.write('take', packet.q.text);
  },

  /**************
  method: drop
  params: packet
  describe: Call the drop function with the packet data.
  ***************/
  drop(packet) {
    return this.func.write('drop', packet.q.text);
  },

  /**************
  method: put
  params: packet
  describe: Call the put function with the packet data.
  ***************/
  put(packet) {
    return this.func.write('put', packet.q.text);
  },

  /**************
  method: give
  params: packet
  describe: Call the give function with the packet data.
  ***************/
  give(packet) {
    return this.func.write('give', packet.q.text);
  },

  /**************
  method: donate
  params: packet
  describe: Call the donate function with the packet data.
  ***************/
  donate(packet) {
    return this.func.write('donate', packet.q.text);
  },

  /**************
  method: wear
  params: packet
  describe: Call the wear function with the packet data.
  ***************/
  wear(packet) {
    return this.func.write('wear', packet.q.text);
  },

  /**************
  method: grab
  params: packet
  describe: Call the grab function with the packet data.
  ***************/
  grab(packet) {
    return this.func.write('grab', packet.q.text);
  },

  /**************
  method: examine
  params: packet
  describe: Call the examine function with the packet data.
  ***************/
  examine(packet) {
    return this.func.write('examine', packet.q.text);
  },

  /**************
  method: use
  params: packet
  describe: Call the use function with the packet data.
  ***************/
  use(packet) {
    return this.func.write('use', packet.q.text);
  },

  /**************
  method: hold
  params: packet
  describe: Call the hold function with the packet data.
  ***************/
  hold(packet) {
    return this.func.write('hold', packet.q.text);
  },

  /**************
  method: wield
  params: packet
  describe: Call the wield function with the packet data.
  ***************/
  wield(packet) {
    return this.func.write('wield', packet.q.text);
  },

  /**************
  method: fill
  params: packet
  describe: Call the fill function with the packet data.
  ***************/
  fill(packet) {
    return this.func.write('fill', packet.q.text);
  },

  /**************
  method: order
  params: packet
  describe: Call the order function with the packet data.
  ***************/
  order(packet) {
    return this.func.write('order', packet.q.text);
  },

  /**************
  method: cast
  params: packet
  describe: Call the cast function with the packet data.
  ***************/
  cast(packet) {
    return this.func.write('cast', packet.q.text);
  },


  /**************
  method: sit
  params: packet
  describe: Call the sit function with the packet data.
  ***************/
  sit(packet) {
    return this.func.write('sit', packet.q.text);
  },

  /**************
  method: stand
  params: packet
  describe: Call the stand function with the packet data.
  ***************/
  stand(packet) {
    return this.func.write('stand', packet.q.text);
  },

  /**************
  method: rest
  params: packet
  describe: Call the rest function with the packet data.
  ***************/
  rest(packet) {
    return this.func.write('rest', packet.q.text);
  },

  /**************
  method: sleep
  params: packet
  describe: Call the sleep function with the packet data.
  ***************/
  sleep(packet) {
    return this.func.write('sleep', packet.q.text);
  },

  /**************
  method: wake
  params: packet
  describe: Call the wake function with the packet data.
  ***************/
  wake(packet) {
    return this.func.write('wake', packet.q.text);
  },

  /**************
  method: pose
  params: packet
  describe: Call the pose function with the packet data.
  ***************/
  pose(packet) {
    return this.func.write('pose', packet.q.text);
  },

  /**************
  method: eat
  params: packet
  describe: Call the eat function with the packet data.
  ***************/
  eat(packet) {
    return this.func.write('eat', packet.q.text);
  },

  /**************
  method: taste
  params: packet
  describe: Call the taste function with the packet data.
  ***************/
  taste(packet) {
    return this.func.write('taste', packet.q.text);
  },

  /**************
  method: pour
  params: packet
  describe: Call the pour function with the packet data.
  ***************/
  pour(packet) {
    return this.func.write('pour', packet.q.text);
  },

  /**************
  method: drink
  params: packet
  describe: Call the drink function with the packet data.
  ***************/
  drink(packet) {
    return this.func.write('drink', packet.q.text);
  },

  /**************
  method: sip
  params: packet
  describe: Call the sip function with the packet data.
  ***************/
  sip(packet) {
    return this.func.write('sip', packet.q.text);
  },

  /**************
  method: whelp
  params: packet
  describe: Call the whelp function with the packet data.
  ***************/
  whelp(packet) {
    return this.func.write('wizhelp', packet.q.text);
  },

  /**************
  method: wizlist
  params: packet
  describe: Call the wizlist function with the packet data.
  ***************/
  wizlist(packet) {
    return this.func.write('wizlist', packet.q.text);
  },

  /**************
  method: wiz
  params: packet
  describe: Call the wiz function with the packet data.
  ***************/
  wiz(packet) {
    return this.func.write('wiz', packet.q.text);
  },

  /**************
  method: goto
  params: packet
  describe: Call the goto function with the packet data.
  ***************/
  goto(packet) {
    return this.func.write('goto', packet.q.text);
  },

  /**************
  method: shutdown
  params: packet
  describe: Call the shutdown function with the packet data.
  ***************/
  shutdown(packet) {
    return this.func.write('shutdown', packet.q.text);
  },

  /**************
  method: stat
  params: packet
  describe: Call the stat function with the packet data.
  ***************/
  stat(packet) {
    return this.func.write('stat', packet.q.text);
  },

  /**************
  method: set
  params: packet
  describe: Call the set function with the packet data.
  ***************/
  set(packet) {
    return this.func.write('set', packet.q.text);
  },


  /**************
  method: score
  params: packet
  describe: Call the score function with the packet data.
  ***************/
  score(packet) {
    return this.func.write('score', false);
  },

  /**************
  method: inventory
  params: packet
  describe: Call the inventory function with the packet data.
  ***************/
  inventory(packet) {
    return this.func.write('inventory', packet.q.text);
  },
  in(packet) {
    return this.methods.inventory(packet);
  },

  /**************
  method: equipment
  params: packet
  describe: Call the equipment function with the packet data.
  ***************/
  equipment(packet) {
    return this.func.write('equipment', packet.q.text);
  },
  eq(packet) {
    return this.methods.equipment(packet);
  },

  /**************
  method: prefedit
  params: packet
  describe: Call the prefedit function with the packet data.
  ***************/
  prefedit(packet) {
    return this.func.write('prefedit', packet.q.text);
  },

  /**************
  method: say
  params: packet
  describe: Call the say function with the packet data.
  ***************/
  say(packet) {
    return this.func.write('say', packet.q.text);
  },

  /**************
  method: shout
  params: packet
  describe: Call the shout function with the packet data.
  ***************/
  shout(packet) {
    return this.func.write('shout', packet.q.text);
  },

  /**************
  method: tell
  params: packet
  describe: Call the tell function with the packet data.
  ***************/
  tell(packet) {
    return this.func.write('tell', packet.q.text);
  },

  /**************
  method: ask
  params: packet
  describe: Call the ask function with the packet data.
  ***************/
  ask(packet) {
    return this.func.write('ask', packet.q.text);
  },

  /**************
  method: whisper
  params: packet
  describe: Call the whisper function with the packet data.
  ***************/
  whisper(packet) {
    return this.func.write('whisper', packet.q.text);
  },

  /**************
  method: emote
  params: packet
  describe: Call the emote function with the packet data.
  ***************/
  emote(packet) {
    return this.func.write('emote', packet.q.text);
  },

  /**************
  method: echo
  params: packet
  describe: Call the echo function with the packet data.
  ***************/
  echo(packet) {
    return this.func.write('echo', packet.q.text);
  },

  /**************
  method: gecho
  params: packet
  describe: Call the gecho function with the packet data.
  ***************/
  gecho(packet) {
    return this.func.write('gecho', packet.q.text);
  },

  /**************
  method: qecho
  params: packet
  describe: Call the qecho function with the packet data.
  ***************/
  qecho(packet) {
    return this.func.write('qecho', packet.q.text);
  },

  /**************
  method: gossip
  params: packet
  describe: Call the gossip function with the packet data.
  ***************/
  gossip(packet) {
    return this.func.write('gossip', packet.q.text);
  },

  /**************
  method: auction
  params: packet
  describe: Call the auction function with the packet data.
  ***************/
  auction(packet) {
    return this.func.write('auction', packet.q.text);
  },

  /**************
  method: grats
  params: packet
  describe: Call the grats function with the packet data.
  ***************/
  grats(packet) {
    return this.func.write('grats', packet.q.text);
  },


  /**************
  method: read
  params: packet
  describe: Call the read function with the packet data.
  ***************/
  read(packet) {
    return this.func.write('read', packet.q.text);
  },

  /**************
  method: write
  params: packet
  describe: Call the write function with the packet data.
  ***************/
  write(packet) {
    return this.func.write('write', packet.q.text);
  },

  /**************
  method: remove
  params: packet
  describe: Call the remove function with the packet data.
  ***************/
  remove(packet) {
    return this.func.write('remove', packet.q.text);
  },

  /**************
  method: practice
  params: packet
  describe: Call the practice function with the packet data.
  ***************/
  practice(packet) {
    return this.func.write('practice', packet.q.text);
  },

  /**************
  method: gold
  params: packet
  describe: Call the gold function with the packet data.
  ***************/
  gold(packet) {
    return this.func.write('gold', packet.q.text);
  },

  /**************
  method: balance
  params: packet
  describe: Call the balance function with the packet data.
  ***************/
  balance(packet) {
    return this.func.write('balance', packet.q.text);
  },

  /**************
  method: withdraw
  params: packet
  describe: Call the withdraw function with the packet data.
  ***************/
  withdraw(packet) {
    return this.func.write('withdraw', packet.q.text);
  },

  /**************
  method: deposit
  params: packet
  describe: Call the deposit function with the packet data.
  ***************/
  deposit(packet) {
    return this.func.write('deposit', packet.q.text);
  },

  /**************
  method: who
  params: packet
  describe: Call the who function with the packet data.
  ***************/
  who(packet) {
    return this.func.write('who', packet.q.text);
  },

  /**************
  method: whois
  params: packet
  describe: Call the whois function with the packet data.
  ***************/
  whois(packet) {
    return this.func.write('whois', packet.q.text);
  },

  /**************
  method: map
  params: packet
  describe: Call the map function with the packet data.
  ***************/
  map(packet) {
    return this.func.write('map', packet.q.text);
  },

  /**************
  method: cedit
  params: packet
  describe: Call the cedit function with the packet data.
  ***************/
  cedit(packet) {
    return this.func.write('cedit', packet.q.text);
  },

  /**************
  method: redit
  params: packet
  describe: Call the redit function with the packet data.
  ***************/
  redit(packet) {
    return this.func.write('redit', packet.q.text);
  },

  /**************
  method: rlist
  params: packet
  describe: Call the rlist function with the packet data.
  ***************/
  rlist(packet) {
    return this.func.write('rlist', packet.q.text);
  },

  /**************
  method: oedit
  params: packet
  describe: Call the oedit function with the packet data.
  ***************/
  oedit(packet) {
    return this.func.write('oedit', packet.q.text);
  },

  /**************
  method: olist
  params: packet
  describe: Call the olist function with the packet data.
  ***************/
  olist(packet) {
    return this.func.write('olist', packet.q.text);
  },

  /**************
  method: medit
  params: packet
  describe: Call the medit function with the packet data.
  ***************/
  medit(packet) {
    return this.func.write('medit', packet.q.text);
  },

  /**************
  method: mlist
  params: packet
  describe: Call the mlist function with the packet data.
  ***************/
  mlist(packet) {
    return this.func.write(false, `mlist ${packet.q.text}`);
  },

  /**************
  method: zedit
  params: packet
  describe: Call the zedit function with the packet data.
  ***************/
  zedit(packet) {
    return this.func.write('zedit', packet.q.text);
  },

  /**************
  method: zlist
  params: packet
  describe: Call the zlist function with the packet data.
  ***************/
  zlist(packet) {
    return this.func.write(false, `zlist ${packet.q.text}`);
  },

  /**************
  method: zreset
  params: packet
  describe: Call the zreset function with the packet data.
  ***************/
  zreset(packet) {
    return this.func.write(false, `zreset ${packet.q.text}`);
  },

  /**************
  method: sedit
  params: packet
  describe: Call the sedit function with the packet data.
  ***************/
  sedit(packet) {
    return this.func.write('sedit', packet.q.text);
  },

  /**************
  method: slist
  params: packet
  describe: Call the slist function with the packet data.
  ***************/
  slist(packet) {
    return this.func.write('slist', packet.q.text);
  },

  /**************
  method: msgedit
  params: packet
  describe: Call the msgedit function with the packet data.
  ***************/
  msgedit(packet) {
    return this.func.write('msgedit', packet.q.text);
  },

  /**************
  method: trigedit
  params: packet
  describe: Call the trigedit function with the packet data.
  ***************/
  trigedit(packet) {
    return this.func.write('trigedit', packet.q.text);
  },

  /**************
  method: tlist
  params: packet
  describe: Call the tlist function with the packet data.
  ***************/
  tlist(packet) {
    return this.func.write('tlist', packet.q.text);
  },

  /**************
  method: qedit
  params: packet
  describe: Call the qedit function with the packet data.
  ***************/
  qedit(packet) {
    return this.func.write('qedit', packet.q.text);
  },

  /**************
  method: purge
  params: packet
  describe: Call the purge function with the packet data.
  ***************/
  purge(packet) {
    return this.func.write('purge', packet.q.text)
  },

  /**************
  method: dig
  params: packet
  describe: Call the dig function with the packet data.
  ***************/
  dig(packet) {
    return this.func.write('dig', packet.q.text)
  },

  /**************
  method: uid
  params: packet
  describe: Return default system uid function.
  ***************/
  uid(packet) {
    return Promise.resolve({text:this.uid()});
  },

  /**************
  method: status
  params: packet
  describe: Returns the status of the Mud Deva.
  ***************/
  status(packet) {
    return this.status();
  },

  /**************
  method: help
  params: packet
  describe: Return the help files for the Mud Deva.
  ***************/
  help(packet) {
    return new Promise((resolve, reject) => {
      this.lib.help(packet.q.text, __dirname).then(help => {
        return this.question(`#feecting parse ${help}`);
      }).then(parsed => {
        return resolve({
          text: parsed.a.text,
          html: parsed.a.html,
          data: parsed.a.data,
        });
      }).catch(reject);
    });
  }
}
