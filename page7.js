function Minion(name, hp) {
  this.name = name;
  this.hp = hp;
}

function Wizard(name, element, hp, mana) {
  Minion.call(this, name, hp);
  this.element = element;
  this.mana = mana;
}

Wizard.prototype = Object.create(Minion.prototype);
Wizard.prototype.constructor = Wizard;
Minion.prototype.toString = function () {
  return this.name;
};

var orc = new Minion("orc", 100);

var orcMage = new Wizard(orc.name, "Fire", orc.hp, 20);

console.log("orc is a Minion: " + (orc instanceof Minion));
console.log(orc.toString());
console.log(orcMage.element);
