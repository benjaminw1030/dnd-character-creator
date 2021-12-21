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
      }; //look into adding resistances and dragon type
    case "Hill Dwarf":
      return {
        ...char,
        con: char.con + 2,
        wis: char.wis + 1,
        speed: 25,
        size: "medium",
        languages: ["Common", "Dwarvish"],
      }; //look into adding tool proficiency choices
    case "Hill Dwarf":
      return {
        ...char,
        con: char.con + 2,
        str: char.str + 2,
        speed: 25,
        size: "medium",
        languages: ["Common", "Dwarvish"],
      }; //look into adding tool proficiency choices
    case "Drow":
      return {
        ...char,
        dex: char.dex + 2,
        cha: char.cha + 1,
        speed: 30,
        size: "medium",
        languages: ["Common", "Elvish"],
      }; //look into adding perception proficiency
    case "High Elf":
      return {
        ...char,
        dex: char.dex + 2,
        int: char.int + 1,
        speed: 30,
        size: "medium",
        languages: ["Common", "Elvish"],
      }; //look into adding perception proficiency, extra language choice
    case "Wood Elf":
      return {
        ...char,
        dex: char.dex + 2,
        wis: char.wis + 1,
        speed: 35,
        size: "medium",
        languages: ["Common", "Elvish"],
      }; //look into adding perception proficiency, extra language choice
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
      }; //tinker tool proficiency
    case "Half-Elf":
      return {
        ...char,
        cha: char.cha + 2,
        speed: 30,
        size: "medium",
        languages: ["Common", "Gnomish"],
      }; //add proficiency in two skills, extra ability score (except charisma), extra language
    case "Half-Orc":
      return {
        ...char,
        str: char.str + 2,
        con: char.con + 1,
        speed: 30,
        size: "medium",
        languages: ["Common", "Orc"],
      }; //add proficiency in intimidation
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
      }; //add extra language
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
  function calcStartingHP(hp, con) {
    return hp + Math.floor((con - 10) / 2);
  }
  switch (char.class) {
    case "Barbarian":
      return {
        ...char,
        currentHP: calcStartingHP(12, char.con),
        maxHP: calcStartingHP(12, char.con),
        armorProf: ["light armor", "medium armor", "shields"],
        weaponProf: ["simple weapons", "martial weapons"],
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
      return {
        ...char,
        currentHP: calcStartingHP(8, char.con),
        maxHP: calcStartingHP(8, char.con),
        armorProf: ["light armor"],
        weaponProf: [
          "simple weapons",
          "hand crossbows",
          "longswords",
          "rapiers",
          "shortswords",
        ],
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
      return {
        ...char,
        currentHP: calcStartingHP(8, char.con),
        maxHP: calcStartingHP(8, char.con),
        armorProf: ["light armor", "medium armor", "shields"],
        weaponProf: ["simple weapons"],
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
      return {
        ...char,
        currentHP: calcStartingHP(8, char.con),
        maxHP: calcStartingHP(8, char.con),
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
      return {
        ...char,
        currentHP: calcStartingHP(10, char.con),
        maxHP: calcStartingHP(10, char.con),
        armorProf: ["light armor", "medium armor", "heavy armor", "shields"],
        weaponProf: ["simple weapons", "martial weapons"],
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
      return {
        ...char,
        currentHP: calcStartingHP(8, char.con),
        maxHP: calcStartingHP(8, char.con),
        weaponProf: ["simple weapons", "shortswords"],
        artisanToolChoiceCount: char.artisanToolChoiceCount + 1,
        instrumentChoiceCount: char.instrumentChoiceCount + 1,
        //one artisan tool or musical instrument, add code later to allow user to choose
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
      return {
        ...char,
        currentHP: calcStartingHP(10, char.con),
        maxHP: calcStartingHP(10, char.con),
        armorProf: ["light armor", "medium armor", "heavy armor", "shields"],
        weaponProf: ["simple weapons", "martial weapons"],
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
      return {
        ...char,
        currentHP: calcStartingHP(10, char.con),
        maxHP: calcStartingHP(10, char.con),
        armorProf: ["light armor", "medium armor", "shields"],
        weaponProf: ["simple weapons", "martial weapons"],
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
      return {
        ...char,
        currentHP: calcStartingHP(8, char.con),
        maxHP: calcStartingHP(8, char.con),
        armorProf: ["light armor"],
        weaponProf: [
          "simple weapons",
          "hand crossbows",
          "longswords",
          "rapiers",
          "shortswords",
        ],
        toolProf: ["Thieves' tools"],
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
      return {
        ...char,
        currentHP: calcStartingHP(6, char.con),
        maxHP: calcStartingHP(6, char.con),
        weaponProf: [
          "daggers",
          "darts",
          "slings",
          "quarterstaffs",
          "light crossbows",
        ],
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
      return {
        ...char,
        currentHP: calcStartingHP(8, char.con),
        maxHP: calcStartingHP(8, char.con),
        armorProf: ["light armor"],
        weaponProf: ["simple weapons"],
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
      return {
        ...char,
        currentHP: calcStartingHP(6, char.con),
        maxHP: calcStartingHP(6, char.con),
        weaponProf: [
          "daggers",
          "darts",
          "slings",
          "quarterstaffs",
          "light crossbows",
        ],
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
      return {
        ...char,
        skills: ["Insight", "Religion"],
        languageChoiceCount: char.languageChoiceCount + 2,
      };
    case "Charlatan":
      return {
        ...char,
        skillProf: ["Insight", "Religion"],
        toolProf: ["Disguise kit", "Forgery kit"], //will need code to merge proficiencies
      };
    case "Criminal":
      return {
        ...char,
        skillProf: ["Deception", "Stealth"],
        toolProf: ["gaming set", "Thieves' tools"],
      };
    case "Entertainer":
      return {
        ...char,
        skillProf: ["Acrobatics", "Performance"],
        toolProf: ["Disguise kit"],
        instrumentChoiceCount: char.instrumentChoiceCount + 1,
      };
    case "Folk Hero":
      return {
        ...char,
        skillProf: ["Animal Handling", "Survival"],
        toolProf: ["vehicles (land)"],
        artisanToolChoiceCount: char.artisanToolChoiceCount + 1,
      };
    case "Guild Artisan":
      return {
        ...char,
        skillProf: ["Insight", "Persuasion"],
        artisanToolChoiceCount: char.artisanToolChoiceCount + 1,
        languageChoiceCount: char.languageChoiceCount + 1,
      };
    case "Hermit":
      return {
        ...char,
        skillProf: ["Medicine", "Religion"],
        toolProf: ["Herbalism kit"],
        languageChoiceCount: char.languageChoiceCount + 1,
      };
    case "Noble":
      return {
        ...char,
        skillProf: ["History", "Persuasion"],
        toolProf: ["gaming set"],
        languageChoiceCount: char.languageChoiceCount + 1,
      };
    case "Outlander":
      return {
        ...char,
        skillProf: ["Athletics", "Survival"],
        instrumentChoiceCount: char.instrumentChoiceCount + 1,
        languageChoiceCount: char.languageChoiceCount + 1,
      };
    case "Sage":
      return {
        ...char,
        skillProf: ["Arcana", "History"],
        languageChoiceCount: char.languageChoiceCount + 2,
      };
    case "Sailor":
      return {
        ...char,
        skillProf: ["Athletics", "Perception"],
        toolProf: ["Navigator's tools", "vehicles (water)"],
      };
    case "Soldier":
      return {
        ...char,
        skillProf: ["Athletics", "Intimidation"],
        toolProf: ["gaming set", "vehicles (land)"],
      };
    case "Urchin":
      return {
        ...char,
        skillProf: ["Sleight of Hand", "Stealth"],
        toolProf: ["Disguise kit", "Thieves' tools"],
      };
    default:
      return char;
  }
}

//need to implement code to add from two different skill/tool sources, if same increase proficiencycount for final screen.