import * as calc from "./Calc";

// later menus:
//dragonborn specifies dragonType
//dwarf adds one ["Smith's tools", "Brewer supplies", "Mason's Tools"]
//half-elf add two ability scores (except charisma)
//monk add one artisan's tool or musical instrument

//function 1:
export function raceMod(char) {
  switch (char.race) {
    case "Dragonborn":
      return {
        ...char,
        str: char.str + 2,
        cha: char.cha + 1,
        speed: 30,
        size: "medium",
        languages: ["Common", "Draconic"],
        dragonborn: true,
      };
    case "Hill Dwarf":
      return {
        ...char,
        con: char.con + 2,
        wis: char.wis + 1,
        speed: 25,
        size: "medium",
        languages: ["Common", "Dwarvish"],
      };
    case "Mountain Dwarf":
      return {
        ...char,
        con: char.con + 2,
        str: char.str + 2,
        speed: 25,
        size: "medium",
        languages: ["Common", "Dwarvish"],
      };
    case "Drow":
      return {
        ...char,
        dex: char.dex + 2,
        cha: char.cha + 1,
        speed: 30,
        size: "medium",
        languages: ["Common", "Elvish"],
        skillProf: ["Perception"],
        weaponProf: ["longsword", "shortsword", "shortbow", "longbow"],
      };
    case "High Elf":
      return {
        ...char,
        dex: char.dex + 2,
        int: char.int + 1,
        speed: 30,
        size: "medium",
        languages: ["Common", "Elvish"],
        skillProf: ["Perception"],
        weaponProf: ["longsword", "shortsword", "shortbow", "longbow"],
        languageChoiceCount: 1,
      };
    case "Wood Elf":
      return {
        ...char,
        dex: char.dex + 2,
        wis: char.wis + 1,
        speed: 35,
        size: "medium",
        languages: ["Common", "Elvish"],
        skillProf: ["Perception"],
        weaponProf: ["longsword", "shortsword", "shortbow", "longbow"],
      };
    case "Forest Gnome":
      return {
        ...char,
        int: char.int + 2,
        dex: char.dex + 1,
        speed: 25,
        size: "small",
        languages: ["Common", "Gnomish"],
      };
    case "Rock Gnome":
      return {
        ...char,
        int: char.int + 2,
        con: char.con + 1,
        speed: 25,
        size: "small",
        languages: ["Common", "Gnomish"],
        toolProf: ["Tinker's tools"],
      };
    case "Half-Elf":
      return {
        ...char,
        cha: char.cha + 2,
        speed: 30,
        size: "medium",
        languages: ["Common", "Gnomish"],
        skillChoiceCount: 2,
        languageChoiceCount: 1,
      };
    case "Half-Orc":
      return {
        ...char,
        str: char.str + 2,
        con: char.con + 1,
        speed: 30,
        size: "medium",
        languages: ["Common", "Orc"],
        skillProf: ["Intimidation"],
      };
    case "Lightfoot Halfling":
      return {
        ...char,
        dex: char.dex + 2,
        cha: char.cha + 1,
        speed: 25,
        size: "small",
        languages: ["Common", "Halfling"],
      };
    case "Stout Halfling":
      return {
        ...char,
        dex: char.dex + 2,
        con: char.con + 1,
        speed: 25,
        size: "small",
        languages: ["Common", "Halfling"],
      };
    case "Human":
      return {
        ...char,
        str: char.str + 1,
        dex: char.dex + 1,
        con: char.con + 1,
        int: char.int + 1,
        wis: char.wis + 1,
        cha: char.cha + 1,
        speed: 30,
        size: "medium",
        languages: ["Common"],
        languageChoiceCount: 1,
      };
    case "Tiefling":
      return {
        ...char,
        cha: char.cha + 2,
        int: char.int + 1,
        speed: 30,
        size: "medium",
        languages: ["Common", "Infernal"],
      };
    default:
      return char;
  }
}

//function 2:
export function classMod(char) {
  switch (char.class) {
    case "Barbarian":
      char = calc.mergeWeaponProf(char, ["simple weapons", "martial weapons"]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(12, char.con),
        maxHP: calc.calcStartingHP(12, char.con),
        armorProf: ["light armor", "medium armor", "shields"],
        str: {
          ...char.str,
          save: true,
        },
        con: {
          ...char.con,
          save: true,
        },
        skillSelection: [
          "Animal Handling",
          "Athletics",
          "Intimidation",
          "Nature",
          "Perception",
          "Survival",
        ],
        skillChoiceCount: 2,
      };
    case "Bard":
      char = calc.mergeWeaponProf(char, [
        "simple weapons",
        "hand crossbows",
        "longswords",
        "rapiers",
        "shortswords",
      ]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(8, char.con),
        maxHP: calc.calcStartingHP(8, char.con),
        armorProf: ["light armor"],
        instrumentChoiceCount: char.instrumentChoiceCount + 3,
        dex: {
          ...char.dex,
          save: true,
        },
        cha: {
          ...char.cha,
          save: true,
        },
        skillSelection: [
          "Acrobatics",
          "Animal Handling",
          "Arcana",
          "Athletics",
          "Deception",
          "History",
          "Insight",
          "Intimidation",
          "Investigation",
          "Medicine",
          "Nature",
          "Perception",
          "Performance",
          "Persuasion",
          "Religion",
          "Sleight of Hand",
          "Stealth",
          "Survival",
        ],
        skillChoiceCount: 3,
      };
    case "Cleric":
      char = calc.mergeWeaponProf(char, ["simple weapons"]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(8, char.con),
        maxHP: calc.calcStartingHP(8, char.con),
        armorProf: ["light armor", "medium armor", "shields"],
        wis: {
          ...char.wis,
          save: true,
        },
        cha: {
          ...char.cha,
          save: true,
        },
        skillSelection: [
          "History",
          "Insight",
          "Medicine",
          "Persuasion",
          "Religion",
        ],
        skillChoiceCount: 2,
      };
    case "Druid":
      char = calc.mergeWeaponProf(char, [
        "clubs",
        "daggers",
        "darts",
        "javelins",
        "maces",
        "quarterstaffs",
        "scimitars",
        "sickles",
        "slings",
        "spears",
      ]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(8, char.con),
        maxHP: calc.calcStartingHP(8, char.con),
        armorProf: ["light armor", "medium armor", "shields"],
        weaponProf: [
          "clubs",
          "daggers",
          "darts",
          "javelins",
          "maces",
          "quarterstaffs",
          "scimitars",
          "sickles",
          "slings",
          "spears",
        ],
        toolProf: ["Herbalism kit"],
        int: {
          ...char.int,
          save: true,
        },
        wis: {
          ...char.wis,
          save: true,
        },
        skillSelection: [
          "Animal Handling",
          "Arcana",
          "Insight",
          "Medicine",
          "Nature",
          "Perception",
          "Religion",
          "Survival",
        ],
        skillChoiceCount: 2,
      };
    case "Fighter":
      char = calc.mergeWeaponProf(char, ["simple weapons", "martial weapons"]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(10, char.con),
        maxHP: calc.calcStartingHP(10, char.con),
        armorProf: ["light armor", "medium armor", "heavy armor", "shields"],
        str: {
          ...char.str,
          save: true,
        },
        con: {
          ...char.con,
          save: true,
        },
        skillSelection: [
          "Acrobatics",
          "Animal Handling",
          "Arcana",
          "Insight",
          "Medicine",
          "Nature",
          "Perception",
          "Religion",
          "Survival",
        ],
        skillChoiceCount: 2,
      };
    case "Monk":
      char = calc.mergeWeaponProf(char, ["simple weapons", "shortswords"]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(8, char.con),
        maxHP: calc.calcStartingHP(8, char.con),
        str: {
          ...char.str,
          save: true,
        },
        dex: {
          ...char.dex,
          save: true,
        },
        skillSelection: [
          "Acrobatics",
          "Athletics",
          "History",
          "Insight",
          "Religion",
          "Stealth",
        ],
        skillChoiceCount: 2,
      };
    case "Paladin":
      char = calc.mergeWeaponProf(char, ["simple weapons", "martial weapons"]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(10, char.con),
        maxHP: calc.calcStartingHP(10, char.con),
        armorProf: ["light armor", "medium armor", "heavy armor", "shields"],
        wis: {
          ...char.wis,
          save: true,
        },
        cha: {
          ...char.cha,
          save: true,
        },
        skillSelection: [
          "Athletics",
          "Insight",
          "Intimidation",
          "Medicine",
          "Persuasion",
          "Religion",
        ],
        skillChoiceCount: 2,
      };
    case "Ranger":
      char = calc.mergeWeaponProf(char, ["simple weapons", "martial weapons"]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(10, char.con),
        maxHP: calc.calcStartingHP(10, char.con),
        armorProf: ["light armor", "medium armor", "shields"],
        str: {
          ...char.str,
          save: true,
        },
        wis: {
          ...char.wis,
          save: true,
        },
        skillSelection: [
          "Animal Handling",
          "Athletics",
          "Insight",
          "Investigation",
          "Nature",
          "Perception",
          "Stealth",
          "Survival",
        ],
        skillChoiceCount: 3,
      };
    case "Rogue":
      char = calc.mergeWeaponProf(char, [
        "simple weapons",
        "hand crossbows",
        "longswords",
        "rapiers",
        "shortswords",
      ]);
      char = calc.mergeToolProf(char, ["Thieves' tools"]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(8, char.con),
        maxHP: calc.calcStartingHP(8, char.con),
        armorProf: ["light armor"],
        dex: {
          ...char.dex,
          save: true,
        },
        int: {
          ...char.int,
          save: true,
        },
        skillSelection: [
          "Acrobatics",
          "Athletics",
          "Deception",
          "Insight",
          "Intimidation",
          "Investigation",
          "Perception",
          "Performance",
          "Persuasion",
          "Sleight of Hand",
          "Stealth",
        ],
        skillChoiceCount: 4,
      };
    case "Sorcerer":
      char = calc.mergeWeaponProf(char, [
        "daggers",
        "darts",
        "slings",
        "quarterstaffs",
        "light crossbows",
      ]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(6, char.con),
        maxHP: calc.calcStartingHP(6, char.con),
        con: {
          ...char.con,
          save: true,
        },
        cha: {
          ...char.cha,
          save: true,
        },
        skillSelection: [
          "Arcana",
          "Deception",
          "Insight",
          "Intimidation",
          "Persuasion",
          "Religion",
        ],
        skillChoiceCount: 2,
      };
    case "Warlock":
      char = calc.mergeWeaponProf(char, ["simple weapons"]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(8, char.con),
        maxHP: calc.calcStartingHP(8, char.con),
        armorProf: ["light armor"],
        wis: {
          ...char.wis,
          save: true,
        },
        cha: {
          ...char.cha,
          save: true,
        },
        skillSelection: [
          "Arcana",
          "Deception",
          "History",
          "Intimidation",
          "Investigation",
          "Nature",
          "Religion",
        ],
        skillChoiceCount: 2,
      };
    case "Wizard":
      char = calc.mergeWeaponProf(char, [
        "daggers",
        "darts",
        "slings",
        "quarterstaffs",
        "light crossbows",
      ]);
      return {
        ...char,
        currentHP: calc.calcStartingHP(6, char.con),
        maxHP: calc.calcStartingHP(6, char.con),
        int: {
          ...char.int,
          save: true,
        },
        wis: {
          ...char.wis,
          save: true,
        },
        skillSelection: [
          "Arcana",
          "History",
          "Insight",
          "Investigation",
          "Medicine",
          "Religion",
        ],
        skillChoiceCount: 2,
      };
    default:
      return char;
  }
}

//function 3:
export function backgroundMod(char) {
  switch (char.background) {
    case "Acolyte":
      char = calc.mergeSkillProf(char, ["Insight", "Religion"]);
      return {
        ...char,
        languageChoiceCount: char.languageChoiceCount + 2,
      };
    case "Charlatan":
      char = calc.mergeSkillProf(char, ["Deception", "Sleight of Hand"]);
      char = calc.mergeToolProf(char, ["Disguise kit", "Forgery kit"]);
      return char;
    case "Criminal":
      char = calc.mergeSkillProf(char, ["Deception", "Stealth"]);
      char = calc.mergeToolProf(char, ["Gaming set", "Thieves' tools"]);
      return char;
    case "Entertainer":
      char = calc.mergeSkillProf(char, ["Acrobatics", "Performance"]);
      char = calc.mergeToolProf(char, ["Disguise kit"]);
      return {
        ...char,
        instrumentChoiceCount: char.instrumentChoiceCount + 1,
      };
    case "Folk Hero":
      char = calc.mergeSkillProf(char, ["Animal Handling", "Survival"]);
      char = calc.mergeToolProf(char, ["Vehicles (land)"]);
      return {
        ...char,
        artisanToolChoiceCount: char.artisanToolChoiceCount + 1,
      };
    case "Guild Artisan":
      char = calc.mergeSkillProf(char, ["Insight", "Persuasion"]);
      return {
        ...char,
        artisanToolChoiceCount: char.artisanToolChoiceCount + 1,
        languageChoiceCount: char.languageChoiceCount + 1,
      };
    case "Hermit":
      char = calc.mergeSkillProf(char, ["Medicine", "Religion"]);
      char = calc.mergeToolProf(char, ["Herbalism kit"]);
      return {
        ...char,
        languageChoiceCount: char.languageChoiceCount + 1,
      };
    case "Noble":
      char = calc.mergeSkillProf(char, ["History", "Persuasion"]);
      char = calc.mergeToolProf(char, ["Gaming set"]);
      return {
        ...char,
        languageChoiceCount: char.languageChoiceCount + 1,
      };
    case "Outlander":
      char = calc.mergeSkillProf(char, ["Athletics", "Survival"]);
      return {
        ...char,
        instrumentChoiceCount: char.instrumentChoiceCount + 1,
        languageChoiceCount: char.languageChoiceCount + 1,
      };
    case "Sage":
      char = calc.mergeSkillProf(char, ["Arcana", "History"]);
      return {
        ...char,
        languageChoiceCount: char.languageChoiceCount + 2,
      };
    case "Sailor":
      char = calc.mergeSkillProf(char, ["Athletics", "Perception"]);
      char = calc.mergeToolProf(char, [
        "Navigator's tools",
        "Vehicles (water)",
      ]);
      return char;
    case "Soldier":
      char = calc.mergeSkillProf(char, ["Athletics", "Intimidation"]);
      char = calc.mergeToolProf(char, ["Gaming set", "Vehicles (land)"]);
      return char;
    case "Urchin":
      char = calc.mergeSkillProf(char, ["Sleight of Hand", "Stealth"]);
      char = calc.mergeToolProf(char, ["Disguise kit", "Thieves' tools"]);
      return char;
    default:
      return char;
  }
}