import React from "react";
import { raceMod, classMod, backgroundMod } from "../utilities/Mod";
import { useFirestore } from "react-redux-firebase";
import {
  increaseAbilityScoreByOne,
  mergeToolProf,
  mergeInstrumentProf,
  mergeSkillProf,
  mergeLanguages,
  isUniqueArray,
} from "../utilities/Calc";
import MainCharForm from "./MainCharForm";
import SpecialRaceForm from "./SpecialRaceForm";
import SpecialClassForm from "./SpecialClassForm";
import ProficienciesForm from "./ProficienciesForm";

export default function NewChar({
  handleNewCharacter,
  uid,
  tempChar,
  setTempChar,
  step,
  setStep,
}) {
  const firestore = useFirestore();
  let formDisplay;

  function addCharacterToFirestore(character) {
    handleNewCharacter();
    return firestore.collection("characters").add(character);
  }

  function submitMainForm(event) {
    event.preventDefault();
    const race = event.target.race.value;
    const charClass = event.target.class.value;
    const baseChar = {
      alignment: event.target.alignment.value,
      background: event.target.background.value,
      class: charClass,
      dragonType: null,
      name: event.target.name.value,
      race: race,
      uid: uid,
      instrumentChoiceCount: 0,
      skillChoiceCount: 0,
      languageChoiceCount: 0,
      artisanToolChoiceCount: 0,
      armorProf: [],
      weaponProf: [],
      languages: [],
      skillProf: [],
      toolProf: [],
      instrumentProf: [],
      skillSelection: [],
      spellcaster: false,
      spellAbility: null,
      str: {
        score: parseInt(event.target.str.value),
        save: false,
      },
      dex: {
        score: parseInt(event.target.dex.value),
        save: false,
      },
      con: {
        score: parseInt(event.target.con.value),
        save: false,
      },
      int: {
        score: parseInt(event.target.int.value),
        save: false,
      },
      wis: {
        score: parseInt(event.target.wis.value),
        save: false,
      },
      cha: {
        score: parseInt(event.target.cha.value),
        save: false,
      },
    };
    const classRaceBackgroundChar = backgroundMod(classMod(raceMod(baseChar)));
    setTempChar(classRaceBackgroundChar);
    if (
      race === "Half-Elf" ||
      race === "Hill Dwarf" ||
      race === "Mountain Dwarf" ||
      race === "Dragonborn"
    ) {
      setStep(2);
    } else if (charClass === "Monk") {
      setStep(3);
    } else {
      setStep(4);
    }
  }

  function submitSpecialRaceForm(event) {
    event.preventDefault();
    if (tempChar.race === "Half-Elf") {
      const abilityScore1 = event.target.halfElfScore1.value;
      const abilityScore2 = event.target.halfElfScore2.value;
      const skill1 = event.target.halfElfSkill1.value;
      const skill2 = event.target.halfElfSkill2.value;
      let halfElfChar = tempChar;
      if (abilityScore1 === abilityScore2) {
        alert("Half-Elves cannot increase the same ability score twice!");
        return;
      } else if (skill1 === skill2) {
        alert("Please choose two different skills!");
        return;
      } else {
        const skillsToAdd = [skill1, skill2];
        halfElfChar = increaseAbilityScoreByOne(halfElfChar, abilityScore1);
        halfElfChar = increaseAbilityScoreByOne(halfElfChar, abilityScore2);
        halfElfChar = mergeSkillProf(halfElfChar, skillsToAdd);
        setTempChar(halfElfChar);
      }
    } else if (tempChar.race === "Dragonborn") {
      const dragonbornChar = {
        ...tempChar,
        dragonType: event.target.dragonType.value,
      };
      setTempChar(dragonbornChar);
    } else if (
      tempChar.race === "Hill Dwarf" ||
      tempChar.race === "Mountain Dwarf"
    ) {
      const dwarfChar = mergeToolProf(tempChar, [event.target.dwarfTool.value]);
      setTempChar(dwarfChar);
    }
    tempChar.class === "Monk" ? setStep(3) : setStep(4);
  }

  function submitSpecialClassForm(event) {
    event.preventDefault();
    const tool = event.target.monkProf.value;
    let monkChar = {};
    switch (tool) {
      case "Bagpipes":
      case "Drum":
      case "Dulcimer":
      case "Flute":
      case "Horn":
      case "Lute":
      case "Lyre":
      case "Pan Flute":
      case "Shawm":
      case "Viol":
        monkChar = mergeInstrumentProf(tempChar, [tool]);
        setTempChar(monkChar);
        break;
      default:
        monkChar = mergeToolProf(tempChar, [tool]);
        setTempChar(monkChar);
    }
    setStep(4);
  }

  function submitProficienciesForm(event) {
    event.preventDefault();
    let skills = [];
    let artisanTools = [];
    let languages = [];
    let instruments = [];
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].name.startsWith("skill")) {
        skills.push(event.target[i].value);
      } else if (event.target[i].name.startsWith("language")) {
        languages.push(event.target[i].value);
      } else if (event.target[i].name.startsWith("artisanTool")) {
        artisanTools.push(event.target[i].value);
      } else if (event.target[i].name.startsWith("instrument")) {
        instruments.push(event.target[i].value);
      }
    }
    if (!isUniqueArray(skills)) {
      alert("Please choose different skills!");
      return;
    }
    if (!isUniqueArray(artisanTools)) {
      alert("Please choose different artisan tools!");
      return;
    }
    if (!isUniqueArray(languages)) {
      alert("Please choose different languages!");
      return;
    }
    if (!isUniqueArray(instruments)) {
      alert("Please choose different instruments!");
      return;
    }
    const finalChar = mergeSkillProf(
      mergeLanguages(
        mergeToolProf(mergeInstrumentProf(tempChar, instruments), artisanTools),
        languages
      ),
      skills
    );
    const charToSave = {
      ability: {
        cha: finalChar.cha,
        con: finalChar.con,
        dex: finalChar.dex,
        int: finalChar.int,
        str: finalChar.str,
        wis: finalChar.wis,
      },
      alignment: finalChar.alignment,
      background: finalChar.background,
      class: finalChar.class,
      description: {
        age: null,
        additional: null,
        allies: null,
        appearance: null,
        backstory: null,
        eyes: null,
        hair: null,
        height: null,
        organizations: null,
        skin: null,
        symbol: null,
        treasure: null,
        weight: null,
      },
      dragonType: finalChar.dragonType,
      equipment: {
        armor: {
          name: null,
          type: null,
          bonus: null,
        },
        weapon: {
          name: "unarmed strike",
          damage: { max: 1, min: 1 },
          magic: 0,
          proficiency: [],
          property: {
            ammunition: null,
            finesse: false,
            heavy: false,
            light: false,
            loading: false,
            range: 5,
            reach: false,
            thrown: false,
            twoHanded: false,
            versatile: null,
            silvered: false,
          },
          type: "bludgeoning",
        },
        shield: {
          name: null,
          bonus: null,
        },
      },
      hp: {
        current: finalChar.currentHP,
        max: finalChar.maxHP,
      },
      inventory: {
        weapons: [],
        armor: [],
        gold: 0,
      },
      level: 1,
      name: finalChar.name,
      personality: {
        traits: null,
        ideals: null,
        bonds: null,
        flaws: null,
      },
      proficiency: {
        armor: finalChar.armorProf,
        instruments: finalChar.instrumentProf,
        languages: finalChar.languages,
        skills: finalChar.skillProf,
        tools: finalChar.toolProf,
        weapons: finalChar.weaponProf,
      },
      race: finalChar.race,
      size: finalChar.size,
      speed: finalChar.speed,
      spellcaster: finalChar.spellcaster,
      magic: {
        spellAbility: finalChar.spellAbility,
        spells: {
          level0: [],
          level1: [],
          level2: [],
          level3: [],
          level4: [],
          level5: [],
          level6: [],
          level7: [],
          level8: [],
          level9: [],
        },
      },
      uid: finalChar.uid,
      xp: 0,
    };
    addCharacterToFirestore(charToSave);
    setStep(1);
  }

  if (step === 1) {
    formDisplay = <MainCharForm submitMainForm={submitMainForm} />;
  } else if (step === 2) {
    formDisplay = (
      <SpecialRaceForm
        submitSpecialRaceForm={submitSpecialRaceForm}
        tempChar={tempChar}
      />
    );
  } else if (step === 3) {
    formDisplay = (
      <SpecialClassForm
        submitSpecialClassForm={submitSpecialClassForm}
        tempChar={tempChar}
      />
    );
  } else if (step === 4) {
    formDisplay = (
      <ProficienciesForm
        submitProficienciesForm={submitProficienciesForm}
        tempChar={tempChar}
      />
    );
  }
  return <>{formDisplay}</>;
}

//potentially add code to roll ability score or use standard array later
