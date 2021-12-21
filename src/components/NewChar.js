import React from "react";
import * as mod from "../utilities/Mod";
import { useFirestore } from "react-redux-firebase";

export default function NewChar({ handleNewCharacter, uid }) {
  const firestore = useFirestore();
  const [tempChar, setTempChar] = useState({});
  const [step, setStep] = useState(1)
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
  function submitFormOne(event) {
    event.preventDefault();
    setTempChar({
      uid: uid,
      name: event.target.name.value,
      race: race,
      class: event.target.class.value,
      background: event.target.background.value,
      instrumentChoiceCount: 0,
      skillChoiceCount: 0,
      toolChoiceCount: 0,
      languageChoiceCount: 0,
      artisanToolChoiceCount: 0,
      armorProf: [],
      weaponProf: [],
      languages: [],
      skillProf: [],
      toolProf: [],
      instrumentProf: [],
      skillSelection: [],
      str: {
        score: event.target.str.value,
        save: false
      },
      dex: {
        score: event.target.dex.value,
        save: false
      },
      con: {
        score: event.target.con.value,
        save: false
      },
      int: {
        score: event.target.int.value,
        save: false
      },
      wis: {
        score: event.target.wis.value,
        save: false
      },
      cha: {
        score: event.target.cha.value,
        save: false
      },
    });
  }

  return (
    <form onSubmit={submitFormOne}>
      <input type="text" name="name" placeholder="Character Name" />
      <label for="race">Select Race</label>
      <select id="race" name="race">
        <option value="Dragonborn">Dragonborn</option>
        <option value="Hill Dwarf">Dwarf (Hill Dwarf)</option>
        <option value="Mountain Dwarf">Dwarf (Mountain)</option>
        <option value="Drow">Elf (Drow)</option>
        <option value="High Elf">Elf (High)</option>
        <option value="Wood Elf">Elf (Wood)</option>
        <option value="Forest Gnome">Gnome (Forest)</option>
        <option value="Rock Gnome">Gnome (Rock)</option>
        <option value="Half-Elf">Half-Elf</option>
        <option value="Half-Orc">Half-Orc</option>
        <option value="Lightfoot Halfling">Halfling (Lightfoot)</option>
        <option value="Stout Halfling">Halfling (Stout)</option>
        <option value="Human">Human</option>
        <option value="Tiefling">Tiefling</option>
      </select>
      <label for="class">Select Class</label>
      <select id="class" name="class">
        <option value="Barbarian">Barbarian</option>
        <option value="Bard">Bard</option>
        <option value="Cleric">Cleric</option>
        <option value="Druid">Druid</option>
        <option value="Fighter">Fighter</option>
        <option value="Monk">Monk</option>
        <option value="Paladin">Paladin</option>
        <option value="Ranger">Ranger</option>
        <option value="Rogue">Rogue</option>
        <option value="Sorcerer">Sorcerer</option>
        <option value="Warlock">Warlock</option>
        <option value="Wizard">Wizard</option>
      </select>
      <label for="background">Select Background</label>
      <select id="background" name="background">
        <option value="Acolyte">Acolyte</option>
        <option value="Charlatan">Charlatan</option>
        <option value="Criminal">Criminal</option>
        <option value="Entertainer">Entertainer</option>
        <option value="Folk Hero">Folk Hero</option>
        <option value="Guild Artisan">Guild Artisan</option>
        <option value="Hermit">Hermit</option>
        <option value="Noble">Noble</option>
        <option value="Outlander">Outlander</option>
        <option value="Sage">Sage</option>
        <option value="Sailor">Sailor</option>
        <option value="Soldier">Soldier</option>
        <option value="Urchin">Urchin</option>
      </select>
      <p>Starting Ability Scores:</p>
      <input
        type="number"
        name="str"
        placeholder="Strength"
        min="3"
        max="18"
        step="1"
      />
      <input
        type="number"
        name="dex"
        placeholder="Dexterity"
        min="3"
        max="18"
        step="1"
      />
      <input
        type="number"
        name="con"
        placeholder="Constitution"
        min="3"
        max="18"
        step="1"
      />
      <input
        type="number"
        name="int"
        placeholder="Intelligence"
        min="3"
        max="18"
        step="1"
      />
      <input
        type="number"
        name="wis"
        placeholder="Wisdom"
        min="3"
        max="18"
        step="1"
      />
      <input
        type="number"
        name="cha"
        placeholder="Charisma"
        min="3"
        max="18"
        step="1"
      />
      <button type="submit">Create Character!</button>
    </form>
  );
}
