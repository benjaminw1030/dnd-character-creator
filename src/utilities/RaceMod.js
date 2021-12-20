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
