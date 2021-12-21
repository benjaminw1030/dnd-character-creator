import React from "react";

function NewCharCleanupForms({ char, submitDragonbornForm }) {
  let raceSelect = null;
  let monkSelect = null;
  if (char.race === "Dragonborn") {
    raceSelect = (
      <div>
        <label for="dragonbornType">Select a dragonborn type</label>
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
  } else if (char.race === "Hill Dwarf" || char.race === "Mountain Dwarf") {
    raceSelect = (
      <div>
        <label for="dwarfTool">Select extra dwarf tool proficiency</label>
        <select id="dwarfTool" name="dwarfTool">
          <option value="Smith's tools">Smith's tools</option>
          <option value="Brewer supplies">Brewer supplies</option>
          <option value="Mason's tools">Mason's tools</option>
        </select>
      </div>
    );
  } else if (char.race === "Half-Elf") {
    <div>
      <p>
        Half Elves may increase two extra abilty scores other than charisma.
      </p>
      <label for="halfElfScore1">First ability:</label>
      <select id="halfElfScore1" name="halfElfScore1">
        <option value="str">Strength</option>
        <option value="dex">Dexterity</option>
        <option value="con">Constitution</option>
        <option value="int">Intelligence</option>
        <option value="wis">Wisdom</option>
      </select>
      <label for="halfElfScore2">Second ability:</label>
      <select id="halfElfScore2" name="halfElfScore2">
        <option value="str">Strength</option>
        <option value="dex">Dexterity</option>
        <option value="con">Constitution</option>
        <option value="int">Intelligence</option>
        <option value="wis">Wisdom</option>
      </select>
    </div>;
  }
  if (char.class === "Monk") {
    monkSelect = <div></div>;
  } else {
    monkSelect = null;
  }
  //add event listener on submit to check if scores are different

  return (
    <>
      <form>
        {raceSelect}
        {monkSelect}
        <button type="submit">Go to the next step!</button>
      </form>
    </>
  );
}

export default NewCharCleanupForms;
