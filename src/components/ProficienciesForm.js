import React from "react";

function ProficienciesForm({ submitProficienciesForm, tempChar }) {
  // let availableTools = [];
  let availableInstruments = [];
  let availableArtisanTools = [];
  let availableSkills = [];
  let availableLanguages = [];
  let instrumentSelect = null;
  let artisanToolSelect = null;
  let languageSelect = null;
  let skillSelect = null;
  const instrumentList = [
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
  // const toolList = [
  //   "Disguise kit",
  //   "Forgery kit",
  //   "Herbalism kit",
  //   "Navigator's tools",
  //   "Poisoner's kit",
  //   "Thieves' tools"
  // ];
  const artisanToolList = [
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
  ];
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
  const languageList = [
    "Abyssal",
    "Celestial",
    "Common",
    "Deep Speech",
    "Draconic",
    "Druidic",
    "Dwarvish",
    "Elvish",
    "Giant",
    "Gnomish",
    "Goblin",
    "Halfling",
    "Infernal",
    "Orc",
    "Primordial",
    "Sylvan",
    "Thieves' Cant",
    "Undercommon",
  ];
  instrumentList.forEach((instrument) => {
    if (!tempChar.instrumentProf.includes(instrument)) {
      availableInstruments.push(instrument);
    }
  });

  artisanToolList.forEach((artisanTool) => {
    if (!tempChar.toolProf.includes(artisanTool)) {
      availableArtisanTools.push(artisanTool);
    }
  });

  skillList.forEach((skill) => {
    if (
      !tempChar.skillProf.includes(skill) &&
      tempChar.skillSelection.includes(skill)
    ) {
      availableSkills.push(skill);
    }
  });

  languageList.forEach((language) => {
    if (!tempChar.languages.includes(language)) {
      availableLanguages.push(language);
    }
  });

  let skillCountingArray = [];
  for (let i = 1; i <= tempChar.skillChoiceCount; i++) {
    skillCountingArray.push("skill" + i);
  }

  let languageCountingArray = [];
  for (let i = 1; i <= tempChar.languageChoiceCount; i++) {
    languageCountingArray.push("language" + i);
  }

  let artisanToolsCountingArray = [];
  for (let i = 1; i <= tempChar.artisanToolChoiceCount; i++) {
    artisanToolsCountingArray.push("artisanTools" + i);
  }

  let instrumentCountingArray = [];
  for (let i = 1; i <= tempChar.instrumentChoiceCount; i++) {
    instrumentCountingArray.push("instrument" + i);
  }

  if (tempChar.skillChoiceCount) {
  let text = "Select a skill.";
  if (tempChar.skillChoiceCount > 1) {
    text = `Select ${tempChar.skillChoiceCount} different skills.`;
  }
  skillSelect = (
    <div>
      <p>{text}</p>
      {skillCountingArray.map((count) => {
        return (
          <select id={count} name={count}>
            {availableSkills.map((skill) => {
              return (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              );
            })}
          </select>
        );
      })}
    </div>
  );
  }

  if (tempChar.languageChoiceCount) {
    let text = "Select a language.";
    if (tempChar.languageChoiceCount > 1) {
      text = `Select ${tempChar.languageChoiceCount} different languages.`;
    }
    languageSelect = (
      <div>
        <p>{text}</p>
        {languageCountingArray.map((count) => {
          return (
            <select id={count} name={count}>
              {availableLanguages.map((language) => {
                return (
                  <option key={language} value={language}>
                    {language}
                  </option>
                );
              })}
            </select>
          );
        })}
      </div>
    );
  }

  if (tempChar.artisanToolChoiceCount) {
    let text = "Select an artisan tool.";
    if (tempChar.languageChoiceCount > 1) {
      text = `Select ${tempChar.artisanToolChoiceCount} different artisan tools.`;
    }
    artisanToolSelect = (
      <div>
        <p>{text}</p>
        {artisanToolsCountingArray.map((count) => {
          return (
            <select id={count} name={count}>
              {availableArtisanTools.map((artisanTool) => {
                return (
                  <option key={artisanTool} value={artisanTool}>
                    {artisanTool}
                  </option>
                );
              })}
            </select>
          );
        })}
      </div>
    );
  }

  if (tempChar.instrumentChoiceCount) {
    let text = "Select an instrument.";
    if (tempChar.instrumentChoiceCount > 1) {
      text = `Select ${tempChar.instrumentChoiceCount} different instruments.`;
    }
    instrumentSelect = (
      <div>
        <p>{text}</p>
        {instrumentCountingArray.map((count) => {
          return (
            <select id={count} name={count}>
              {availableInstruments.map((instrument) => {
                return (
                  <option key={instrument} value={instrument}>
                    {instrument}
                  </option>
                );
              })}
            </select>
          );
        })}
      </div>
    );
  }

  return (
    <form onSubmit={submitProficienciesForm}>
      {skillSelect}
      {languageSelect}
      {artisanToolSelect}
      {instrumentSelect}
      <button type="submit">Finalize Character!</button>
    </form>
  );
}

export default ProficienciesForm;
