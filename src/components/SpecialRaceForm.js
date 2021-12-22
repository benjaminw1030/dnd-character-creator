import React from "react";

function SpecialRaceForm({ tempChar, submitSpecialRaceForm }) {
  let raceSelect = null;
  if (tempChar.race === "Dragonborn") {
    raceSelect = (
      <div>
        <label htmlFor="dragonbornType">Select a dragonborn type</label>
        <select id="dragonType" name="dragonType">
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Brass">Brass</option>
          <option value="Bronze">Bronze</option>
          <option value="Copper">Copper</option>
          <option value="Gold">Gold</option>
          <option value="Green">Green</option>
          <option value="Red">Red</option>
          <option value="Silver">Silver</option>
          <option value="White">White</option>
        </select>
      </div>
    );
  } else if (
    tempChar.race === "Hill Dwarf" ||
    tempChar.race === "Mountain Dwarf"
  ) {
    raceSelect = (
      <div>
        <label htmlFor="dwarfTool">Select extra dwarf tool proficiency</label>
        <select id="dwarfTool" name="dwarfTool">
          <option value="Smith's tools">Smith's tools</option>
          <option value="Brewer supplies">Brewer supplies</option>
          <option value="Mason's tools">Mason's tools</option>
        </select>
      </div>
    );
  } else if (tempChar.race === "Half-Elf") {
    let availableSkills = [];
    const skillList = [
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
    ];
    skillList.forEach((skill) => {
      if (!tempChar.skillProf.includes(skill)) {
        availableSkills.push(skill);
      }
    });
    raceSelect = (
      <div>
        <p>
          Half Elves may increase two extra abilty scores other than charisma.
        </p>
        <label htmlFor="halfElfScore1">First ability:</label>
        <select id="halfElfScore1" name="halfElfScore1">
          <option value="str">Strength</option>
          <option value="dex">Dexterity</option>
          <option value="con">Constitution</option>
          <option value="int">Intelligence</option>
          <option value="wis">Wisdom</option>
        </select>
        <label htmlFor="halfElfScore2">Second ability:</label>
        <select id="halfElfScore2" name="halfElfScore2">
          <option value="str">Strength</option>
          <option value="dex">Dexterity</option>
          <option value="con">Constitution</option>
          <option value="int">Intelligence</option>
          <option value="wis">Wisdom</option>
        </select>
        <p>Half Elves may choose two extra skills.</p>
        <label htmlFor="halfElfSkill1">First skill:</label>
        <select id="halfElfSkill1" name="halfElfSkill1">
          {availableSkills.map((skill) => {
            return <option key={skill} value={skill}>{skill}</option>;
          })}
        </select>
        <label htmlFor="halfElfSkill2">Second skill:</label>
        <select id="halfElfSkill2" name="halfElfSkill2">
          {availableSkills.map((skill) => {
            return <option key={skill} value={skill}>{skill}</option>;
          })}
        </select>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={submitSpecialRaceForm}>
        {raceSelect}
        <button type="submit">Go to the next step!</button>
      </form>
    </>
  );
}

export default SpecialRaceForm;
