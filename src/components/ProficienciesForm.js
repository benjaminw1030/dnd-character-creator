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
  ]
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
  ]
  instrumentList.forEach(instrument => {
    if (tempChar.instrumentProf.includes(instrument)) {
      continue;
    } else {
      availableInstruments.push(instrument);
    }
  })
  // toolList.forEach(tool => {
  //   if (tempChar.toolProf.includes(tool)) {
  //     continue;
  //   } else {
  //     availableTools.push(tool);
  //   }
  // })
  artisanToolList.forEach(artisanTool => {
    if (tempChar.artisanToolProf.includes(artisanTool)) {
      continue;
    } else {
      availableArtisanTools.push(artisanTool);
    }
  })
  skillList.forEach(skill => {
    if (tempChar.skillProf.includes(skill) || !tempChar.skillSelection.includes(skill)) {
      continue;
    } else {
      availableSkills.push(skill);
    }
  })
  languageList.forEach(language => {
    if (tempChar.languages.includes(language)) {
      continue;
    } else {
      availableLanguages.push(language);
    }
  })

  let skillCountingArray = []
  for (i = 1; i <= tempChar.skillChoiceCount; i++) {
    skillCountingArray.push("skill" + i);
  }

  let languageCountingArray = []
  for (i = 1; i <= tempChar.languageChoiceCount; i++) {
    languageCountingArray.push("language" + i);
  }

  let artisanToolsCountingArray = []
  for (i = 1; i <= tempChar.artisanToolsChoiceCount; i++) {
    artisanToolsCountingArray.push("artisanTools" + i);
  }

  let instrumentCountingArray = []
  for (i = 1; i <= tempChar.instrumentChoiceCount; i++) {
    instrumentCountingArray.push("instrument" + i);
  }

  const skillSelect = (
    <div>
      <p>Select {tempChar.skillChoiceCount} different skills.</p>
      {skillCountingArray.map(count => {
        <select id={count} name={count}>
        {availableSkills.map((skill) => {
          <option value={skill}>{skill}</option>
        })}
        </select>
      })}
    </div>
  )

  if (tempChar.languageChoiceCount) {
      languageSelect = (
      <div>
        <p>Select {tempChar.languageChoiceCount} different languages.</p>
        {languageCountingArray.map(count => {
          <select id={count} name={count}>
          {availableLanguages.map((language) => {
            <option value={language}>{language}</option>
          })}
          </select>
        })}
      </div>
    )
  }

  if (tempChar.artisanToolChoiceCount) {
      artisanToolSelect = (
      <div>
        <p>Select {tempChar.artisanToolChoiceCount} different artisan tools.</p>
        {artisanToolCountingArray.map(count => {
          <select id={count} name={count}>
          {availableartisanTools.map((artisanTool) => {
            <option value={artisanTool}>{artisanTool}</option>
          })}
          </select>
        })}
      </div>
    )
  }

  if (tempChar.instrumentChoiceCount) {
      instrumentSelect = (
      <div>
        <p>Select {tempChar.instrumentChoiceCount} different instruments.</p>
        {instrumentCountingArray.map(count => {
          <select id={count} name={count}>
          {availableinstruments.map((instrument) => {
            <option value={instrument}>{instrument}</option>
          })}
          </select>
        })}
      </div>
    )
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