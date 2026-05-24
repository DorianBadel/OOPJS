function Minion(name, hp) {
  this.name = name;
  this.hp = hp;
}

Minion.prototype.toString = function () {
  return this.name;
};

function Wizard(name, element, hp, mana) {
  Minion.call(this, name, hp);
  this.element = element;
  this.mana = mana;
}

Wizard.prototype = Object.create(Minion.prototype);
Wizard.prototype.constructor = Wizard;

Wizard.prototype.castSpell = function (spell, target) {
  console.log(this + " cast " + spell + " on " + target);
  this.mana -= spell.mana;
  spell(target);
};

Wizard.prototype.toString = function () {
  return (
    Minion.prototype.toString.apply(this, arguments) +
    ", the " +
    this.element +
    " Wizard"
  );
};

const lightningSpell = (target) => {
  console.log("A bolt of lightning electrifies " + target + "(-10hp)");
  target.hp -= 10;
};
lightningSpell.mana = 5;
lightningSpell.toString = function () {
  return "lightging spell";
};

var orc = new Minion("orc", 100);

var gandalf = new Wizard("Gandalf", "Grey", 50, 50);

console.log("Gandalf is a Wizard: " + (gandalf instanceof Wizard));
console.log("Gandalf is a Minion: " + (gandalf instanceof Minion));
gandalf.castSpell(lightningSpell, orc);
