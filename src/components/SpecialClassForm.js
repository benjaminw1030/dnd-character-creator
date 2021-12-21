import React from "react";

function MainCharForm({ submitSpecialClassForm, tempChar }) {
  let editedTools = []
  let availableTools = [
    "Alchemist's supplies",
    "Brewer's supplies",
    "Calligrapher's supplies",
    "Carpenter's tools",
    "Cartographer's tools",
    "Cobbler's tools",
    "Cook's utensils",
    "Glassblower's tools",
    "Jeweler's tools",
    "Leatherworker's tools",
    "Mason's tools",
    "Painter's supplies",
    "Potter's tools",
    "Smith's tools",
    "Tinker's tools",
    "Weaver's tools",
    "Woodcarver's tools",
    "Bagpipes",
    "Drum",
    "Dulcimer",
    "Flute",
    "Horn",
    "Lute",
    "Lyre",
    "Pan Flute",
    "Shawm",
    "Viol",
  ];
  availableTools.forEach(tool => {
    if (tempChar.toolProf.includes(tool) || tempChar.instrumentProf.includes(tool)) {
      continue;
    } else {
      editedTools.push(tool);
    }
  })

  return (
    <form onSubmit={submitSpecialClassForm}>
      <label for="monkProf">Select an extra Monk tool/instrument proficiency</label>
        <select id="monkProf" name="monkProf">
          {editedTools.map((tool) => {
            <option value={tool}>{tool}</option>
          })}
        </select>
      <button type="submit">Go to the next step!</button>
    </form>
  );
}

export default MainCharForm;
