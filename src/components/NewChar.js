import React, { useState } from "react";
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
  // const [tempChar, setTempChar] = useState({});
  // const [step, setStep] = useState(1);
  let formDisplay;
  // function addCharacterToFirestore(event) {
  //   event.preventDefault();
  //   handleNewCharacter();
  //   return firestore.collection('characters').add(
  //     {
  //     uid: uid,
  //     name: event.target.name.value
  //     }
  //   )
  // }

  function submitMainForm(event) {
    event.preventDefault();

    // console.log(event.target)
    // console.log(event.target.length)
    for (let i = 0; i < event.target.length; i++) {
      console.log(event.target[i].name);
      console.log(event.target[i].value);
    }
    //   console.log(item.value)
    // })
    const race = event.target.race.value;
    const charClass = event.target.class.value;
    const baseChar = {
      uid: uid,
      name: event.target.name.value,
      alignment: event.target.alignment.value,
      race: race,
      class: charClass,
      background: event.target.background.value,
      instrumentChoiceCount: 0,
      skillChoiceCount: 0,
      languageChoiceCount: 0,
      artisanToolChoiceCount: 0,
      dragonType: null,
      armorProf: [],
      weaponProf: [],
      languages: [],
      skillProf: [],
      toolProf: [],
      instrumentProf: [],
      skillSelection: [],
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
    // console.log(classRaceBackgroundChar);
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
        console.log(halfElfChar);
        setTempChar(halfElfChar);
      }
    } else if (tempChar.race === "Dragonborn") {
      const dragonbornChar = {
        ...tempChar,
        dragonType: event.target.dragonType.value,
      };
      console.log(dragonbornChar);
      setTempChar(dragonbornChar);
    } else if (
      tempChar.race === "Hill Dwarf" ||
      tempChar.race === "Mountain Dwarf"
    ) {
      const dwarfChar = mergeToolProf(tempChar, [event.target.dwarfTool.value]);
      console.log(dwarfChar);
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
        console.log(monkChar);
        setTempChar(monkChar);
        break;
      default:
        monkChar = mergeToolProf(tempChar, [tool]);
        console.log(monkChar);
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
      uid: finalChar.uid,
      name: finalChar.name,
      alignment: finalChar.alignment,
      race: finalChar.race,
      class: finalChar.class,
      background: finalChar.background,
      dragonType: finalChar.dragonType,
      armorProf: finalChar.armorProf,
      weaponProf: finalChar.weaponProf,
      languages: finalChar.languages,
      skillProf: finalChar.skillProf,
      toolProf: finalChar.toolProf,
      instrumentProf: finalChar.instrumentProf,
      ability: {
        str: finalChar.str,
        dex: finalChar.dex,
        con: finalChar.con,
        int: finalChar.int,
        wis: finalChar.wis,
        cha: finalChar.cha,
      },
    };
    console.log(charToSave);
    // console.log(finalChar);
    // console.log(skills);
    // console.log(artisanTools);
    // console.log(instruments);
    // console.log(languages);

    // for (let i = 1; i <= tempChar.instrumentChoiceCount; i++) {
    //   instruments.push(event.target.instrument{i})
    // }
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
