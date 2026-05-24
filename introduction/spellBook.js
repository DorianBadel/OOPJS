const lightningSpell = (target) => {
  console.log("A bolt of lightning electrifies " + target + " (-10hp)");
  target.hp -= 10;
};

lightningSpell.mana = 5;
lightningSpell.toString = function () {
  return "lightning spell";
};

export { lightningSpell };
