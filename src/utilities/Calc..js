export function calcStartingHP(hp, con) {
  return hp + Math.floor((con - 10) / 2);
}

export function mergeSkillProf(char, skills) {
  skills.forEach(skill => {
    if (char.skillProf.includes(skill)) {
      char.skillChoiceCount += 1;
    } else {
      char.skillProf.push(skill);
    }
  })
  return char
}

export function mergeToolProf(char, tools) {
  tools.forEach(tool => {
    if (char.toolProf.includes(tool)) {
      char.toolChoiceCount += 1;
    } else {
      char.toolProf.push(tool);
    }
  })
  return char
}

export function mergeLanguages(char, languages) {
  languages.forEach(language => {
    if (char.languages.includes(language)) {
      continue;
    } else {
      char.languages.push(language);
    }
  })
  return char
}

export function mergeWeaponProf(char, weapons) {
  weapons.forEach(weapon => {
    if (char.weaponProf.includes(weapon)) {
      continue;
    } else {
      char.weaponProf.push(weapon);
    }
  })
  return char
}