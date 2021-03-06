export function calcStartingHP(char, hp) {
  if (char.race === "Hill Dwarf") {
    return hp + 1 + Math.floor((char.con.score - 10) / 2);
  } else {
    return hp + Math.floor((char.con.score - 10) / 2);
  }
}

export function calcAbilityModifier(ability) {
  return Math.floor((ability - 10) / 2);
}

export function mergeSkillProf(char, skills) {
  skills.forEach((skill) => {
    if (char.skillProf.includes(skill)) {
      char.skillChoiceCount += 1;
    } else {
      char.skillProf.push(skill);
    }
  });
  return char;
}

export function mergeToolProf(char, tools) {
  tools.forEach((tool) => {
    if (char.toolProf.includes(tool)) {
      char.toolChoiceCount += 1;
    } else {
      char.toolProf.push(tool);
    }
  });
  return char;
}

export function mergeInstrumentProf(char, instruments) {
  instruments.forEach((instrument) => {
    if (char.instrumentProf.includes(instrument)) {
      char.instrumentChoiceCount += 1;
    } else {
      char.instrumentProf.push(instrument);
    }
  });
  return char;
}

export function mergeLanguages(char, languages) {
  languages.forEach((language) => {
    if (!char.languages.includes(language)) {
      char.languages.push(language);
    }
  });
  return char;
}

export function mergeWeaponProf(char, weapons) {
  weapons.forEach((weapon) => {
    if (!char.weaponProf.includes(weapon)) {
      char.weaponProf.push(weapon);
    }
  });
  return char;
}

export function mergeArmorProf(char, armors) {
  armors.forEach((armor) => {
    if (!char.armorProf.includes(armor)) {
      char.armorProf.push(armor);
    }
  });
  return char;
}

export function increaseAbilityScoreByOne(char, score) {
  let newChar = {};
  switch (score) {
    case "str":
      newChar = { ...char, str: { ...char.str, value: char.str.value + 1 } };
      return newChar;
    case "dex":
      newChar = { ...char, dex: { ...char.dex, value: char.dex.value + 1 } };
      return newChar;
    case "con":
      newChar = { ...char, con: { ...char.con, value: char.con.value + 1 } };
      return newChar;
    case "int":
      newChar = { ...char, int: { ...char.int, value: char.int.value + 1 } };
      return newChar;
    case "wis":
      newChar = { ...char, wis: { ...char.wis, value: char.wis.value + 1 } };
      return newChar;
    case "cha":
      newChar = { ...char, cha: { ...char.cha, value: char.cha.value + 1 } };
      return newChar;
    default:
      return char;
  }
}

export function isUniqueArray(array) {
  return array.length === new Set(array).size;
}
