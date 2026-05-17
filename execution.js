import { Minion, Thief, Wizard, Bard } from "./classes.js";
import { lightningSpell } from "./spellBook.js";

const thief = Thief("Locke Lamora", 30);
const orc = new Minion("classy orc", 50);
const wizard = Wizard("Randalf, the Red", "fire", 10, 100);
const bard = Bard("Kvothe", "lute", 30, 50);

console.log(orc);

wizard.castSpell(lightningSpell, orc);
thief.steals("orc", "gold coin");
bard.castSpell(lightningSpell, orc);
bard.steals("orc", "sandwich");
bard.playsMusic();

console.log(orc);
