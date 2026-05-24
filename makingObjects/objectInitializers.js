// Aka object literals.

const die20 = () => Math.floor(Math.random() * 20);
const die8 = () => Math.floor(Math.random() * 8);

var critter = {
  position: { x: 0, y: 0 },
  moveTo: function (x, y) {
    console.log(this + " move to (" + x + "," + y + ")");
    this.position.x = x;
    this.position.y = y;
  },
  toString: function () {
    return "critter";
  },
  hp: 40,
};

critter.moveTo(10, 10);

critter.damage = 1;
critter.attacks = function (target) {
  console.log(
    this + " rabidly attacks " + target + " with " + this.damage + " damage",
  );
  target.hp -= this.damage;
};

var rabbit = {
  hp: 10,
  toString: function () {
    return "rabbit";
  },
};

critter["attacks"](rabbit);

critter["sounds used when communicating"] = ["beeeeeh", "grrrrr", "tjjjjiii"];
critter.saysSomething = function () {
  var numberOfSounds = this["sounds used when communicating"].length,
    randomPick = Math.floor(Math.random() * numberOfSounds);

  console.log(this["sounds used when communicating"][randomPick]);
};

critter.saysSomething();
critter.saysSomething();
critter.saysSomething();
critter.saysSomething();

// 443

var mouse = {
  strength: 1,
  dexterity: 1,
  get damage() {
    return this.strength * die20() + this.dexterity * die8();
  },
  attacks: function (target) {
    console.log(
      this +
        " ravenously attacks " +
        target +
        " with " +
        this.damage +
        " damage!",
    );
    target.hp -= this.damage;
  },
  toString: () => {
    return "mouse";
  },
};

var giantBat = {
  _hp: 24,
  get hp() {
    return this._hp;
  },
  set hp(value) {
    if (value < 0) {
      console.log(this + " dies :(");
      this._hp = 0;
    } else {
      this._hp = value;
    }
  },
  toString: function () {
    return this.hp > 0 ? "giant bat" : "a dead giant bat";
  },
};

mouse.attacks(giantBat);
console.log(giantBat.toString());

// 445 Method Overloading
var venomousFrog = {
  toString: function () {
    return "venomous frog";
  },
  jumps: function (meters) {
    if (typeof meters === "number") {
      console.log(this + " jumps " + meters + " meters in the air");
    } else {
      console.log(this + " jumps " + meters);
    }
  },
};

venomousFrog.jumps(10);
venomousFrog.jumps("wildly in front of you");

// Creating Objects with Factories

function monster(type, hp) {
  return {
    type: type,
    hp: hp || 10,
    toString: function () {
      return this.type;
    },
    position: { x: 0, y: 0 },
    movesTo: function (x, y) {
      console.log(this + " moves to (" + x + "," + y + ")");
      this.position.x = x;
      this.position.y = y;
    },
  };
}

var tinySpider = monster("tiny spider", 1);
var giantSpider = monster("giant spider", 200);

tinySpider.movesTo(1, 1);
giantSpider.movesTo(10, 10);

// Data privacy

function stealthyMonster(type, hp) {
  var position = { x: 0, y: 0 };

  return {
    type: type,
    hp: hp || 10,
    toString: function () {
      return `Stealthy ${this.type}`;
    },
    movesTo: function (x, y) {
      console.log(this + " moves to (" + x + "," + y + ")");

      // this function closes over (or encloses) the position variable position is NOT part of the object itself, its a free variable that's why you cannot access it via this.position

      position.x = x;
      position.y = y;
    },
  };
}

var darkSpider = stealthyMonster("dark spider");
console.log(darkSpider.position);
darkSpider.movesTo(10, 10);

// ES6 upgrades

let sugaryCritter = {
  position: { x: 0, y: 0 },
  movesTo(x, y) {
    console.log(`${this} moves to (${x},${y})`);
    this.position.x = x;
    this.position.y = y;
  },
  toString() {
    return "Sugary ES6 critter";
  },
  hp: 40,
};

sugaryCritter.movesTo(10, 11);

function sugaryStealthyMonster(type, hp = 10) {
  let position = { x: 0, y: 0 };

  return {
    type,
    hp,
    toString() {
      return `Stealthy ${this.type}`;
    },
    movesTo(x, y) {
      console.log(this + " moves to (" + x + "," + y + ")");

      // this function closes over (or encloses) the position variable position is NOT part of the object itself, its a free variable that's why you cannot access it via this.position

      position.x = x;
      position.y = y;
    },
  };
}

var sugaryOoze = sugaryStealthyMonster("sugary Ooze", 500);
console.log(sugaryOoze.position);
sugaryOoze.movesTo(2, 3);

let theArrow = () => "I am an arrow";

let crazyMonkey = {
  name: "Kong",
  ["hates!"]: ["mario", "luigi"],

  [(() => "loves!")()]: ["bananas"],
  [sugaryOoze.type]: sugaryOoze.type,

  [theArrow]: "whats going on !?",
};

console.log(crazyMonkey);
console.log(crazyMonkey[theArrow]);

// ES6 Symbols and Data Privacy
