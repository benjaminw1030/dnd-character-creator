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


export function classMod(char) {
  function calcStartingHP(hp, con) {
    return hp + Math.floor((con - 10)/2) 
  }
  switch (char.class) {
    case "Barbarian":
      return {
        ...char,
        currentHP: calcStartingHP(12, char.con),
        maxHP: calcStartingHP(12, char.con),
        armorProf: ["light armor", "medium armor", "shields"],
        weaponProf: ["simple weapons", "martial weapons"],
        toolProf: [],
        str: {
          ...char.str,
          save: true
        },
        con: {
          ...char.con,
          save: true
        },
        skillChoiceArray: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
        skillChoiceCount: 2
      }; 
    case "Bard":
      return {
        ...char,
        currentHP: calcStartingHP(8, char.con),
        maxHP: calcStartingHP(8, char.con),
        armorProf: ["light armor"],
        weaponProf: ["simple weapons", "hand crossbows", "longswords", "rapiers", "shortswords"],
        toolProf: [], //3 musical instruments
        dex: {
          ...char.dex,
          save: true
        },
        cha: {
          ...char.cha,
          save: true
        },
        skillChoiceArray: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
        skillChoiceCount: 3
      }; 
    case "Cleric":
      return {
        ...char,
        currentHP: calcStartingHP(8, char.con),
        maxHP: calcStartingHP(8, char.con),
        armorProf: ["light armor", "medium armor", "shields"],
        weaponProf: ["simple weapons"],
        toolProf: [],
        wis: {
          ...char.wis,
          save: true
        },
        cha: {
          ...char.cha,
          save: true
        },
        skillChoiceArray: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
        skillChoiceCount: 2
      }; 
    case "Druid":
      return {
        ...char,
        currentHP: calcStartingHP(8, char.con),
        maxHP: calcStartingHP(8, char.con),
        armorProf: ["light armor", "medium armor", "shields"],
        weaponProf: ["clubs", "daggers", "darts", "javelins", "maces", "quarterstaffs", "scimitars", "sickles", "slings", "spears"],
        toolProf: ["Herbalism kit"],
        int: {
          ...char.int,
          save: true
        },
        wis: {
          ...char.wis,
          save: true
        },
        skillChoiceArray: ["Animal Handling", "Arcana", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
        skillChoiceCount: 2
      }; 
    case "Fighter":
      return {
        ...char,
        currentHP: calcStartingHP(10, char.con),
        maxHP: calcStartingHP(10, char.con),
        armorProf: ["light armor", "medium armor", "heavy armor", "shields"],
        weaponProf: ["simple weapons", "martial weapons"],
        toolProf: [],
        str: {
          ...char.str,
          save: true
        },
        con: {
          ...char.con,
          save: true
        },
        skillChoiceArray: ["Acrobatics", "Animal Handling", "Arcana", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
        skillChoiceCount: 2
      }; 
    case "Monk":
      return {
        ...char,
        currentHP: calcStartingHP(8, char.con),
        maxHP: calcStartingHP(8, char.con),
        armorProf: [],
        weaponProf: ["simple weapons", "shortswords"],
        toolProf: [], //one artisan tool or musical instrument
        str: {
          ...char.str,
          save: true
        },
        dex: {
          ...char.dex,
          save: true
        },
        skillChoiceArray: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
        skillChoiceCount: 2
      };
    case "Paladin":
      return {
        ...char,
        currentHP: calcStartingHP(10, char.con),
        maxHP: calcStartingHP(10, char.con),
        armorProf: ["light armor", "medium armor", "heavy armor", "shields"],
        weaponProf: ["simple weapons", "martial weapons"],
        toolProf: [],
        wis: {
          ...char.wis,
          save: true
        },
        cha: {
          ...char.cha,
          save: true
        },
        skillChoiceArray: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
        skillChoiceCount: 2
      }; 
    case "Ranger":
      return {
        ...char,
        currentHP: calcStartingHP(10, char.con),
        maxHP: calcStartingHP(10, char.con),
        armorProf: ["light armor", "medium armor", "shields"],
        weaponProf: ["simple weapons", "martial weapons"],
        toolProf: [],
        str: {
          ...char.str,
          save: true
        },
        wis: {
          ...char.wis,
          save: true
        },
        skillChoiceArray: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
        skillChoiceCount: 3
    //   }; 
    // case "Rogue":
    //   return {
    //     ...char,
    //     currentHP: calcStartingHP(10, char.con),
    //     maxHP: calcStartingHP(10, char.con),
    //     armorProf: ["light armor", "medium armor", "shields"],
    //     weaponProf: ["simple weapons", "martial weapons"],
    //     toolProf: [],
    //     str: {
    //       ...char.str,
    //       save: true
    //     },
    //     wis: {
    //       ...char.wis,
    //       save: true
    //     },
    //     skillChoiceArray: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
    //     skillChoiceCount: 3
    //   }; 

    default:
      return char;
  }
}