class Minion {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  toString() {
    return this.name;
  }
}

class Wizard extends Minion {
  constructor(name, element, hp, mana) {
    super(name, hp);
    this.element = element;
    this.mana = mana;
  }

  toString() {
    return super.toString() + ", the " + this.element + " Wizard";
  }
  castSpell(spell, target) {
    console.log(this + " casts " + spell + " on " + target);
    this.mana -= spell.mana;
    spell(target);
  }
}

const orc = new Minion("classy orc", 50);
console.log(orc);
console.log(orc.toString());
console.log("classy orc is a ClassyMinion: " + (orc instanceof Minion));
const gandalf = new Wizard("Gandalf", "Grey", 25, 50);
console.log(gandalf);
console.log("classy gandalf is a Minion: " + (gandalf instanceof Minion));
console.log("classy gandalf is a Wizard: " + (gandalf instanceof Wizard));
