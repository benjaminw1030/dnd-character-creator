import React from "react";

//maybe add warlock/cleric/other level 1 stuff here
function SpecialClassForm({ submitSpecialClassForm, tempChar }) {
  let editedTools = [];
  const availableToolList = [
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
  availableToolList.forEach((tool) => {
    if (
      !tempChar.toolProf.includes(tool) &&
      !tempChar.instrumentProf.includes(tool)
    ) {
      editedTools.push(tool);
    }
  });

  return (
    <form onSubmit={submitSpecialClassForm}>
      <label htmlFor="monkProf">
        Select an extra Monk tool/instrument proficiency
      </label>
      <select id="monkProf" name="monkProf" required>
        {editedTools.map((tool) => {
          return (
            <option key={tool} value={tool}>
              {tool}
            </option>
          );
        })}
      </select>
      <button type="submit">Go to the next step!</button>
    </form>
  );
}

export default SpecialClassForm;
