const canCastSpells = {
  castSpell(spell, target) {
    console.log(this + " casts " + spell + " on " + target);
    this.mana -= spell.mana;
    spell(target);
  },
};

const canSteal = {
  steals(target, item) {
    console.log(`${this} steals ${item} from ${target}`);
  },
};

const canPlayMusic = {
  playsMusic() {
    console.log(
      `${this} grabs his ${this.instrument}` + ` and starts playing music`,
    );
  },
};

const canBeIdentifiedByName = {
  toString() {
    return this.name;
  },
};

class Minion {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  toString() {
    return this.name;
  }
}

function Wizard(name, element, hp, mana) {
  const wizard = { name, element, hp, mana };
  Object.assign(wizard, canBeIdentifiedByName, canCastSpells);
  return wizard;
}

function Thief(name, hp) {
  const thief = { name, hp };
  Object.assign(thief, canBeIdentifiedByName, canSteal);
  return thief;
}

function Bard(name, instrument, hp, mana) {
  const bard = { name, instrument, hp, mana };
  Object.assign(
    bard,
    canBeIdentifiedByName,
    canSteal,
    canCastSpells,
    canPlayMusic,
  );
  return bard;
}

export { Minion, Wizard, Thief, Bard };
