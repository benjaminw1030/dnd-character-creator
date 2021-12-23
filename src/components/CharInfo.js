import React from "react";
import { calcAbilityModifier } from "../utilities/Calc";
import { calcSkillModifier } from "../utilities/Calc";

export default function CharInfo({ character, handleDeleteCharacter }) {
  const proficiencyBonus =
    character.level < 5
      ? 2
      : character.level < 9
      ? 3
      : character.level < 13
      ? 4
      : character.level < 17
      ? 5
      : 6;
  const strMod = calcAbilityModifier(character.ability.str.score);
  const dexMod = calcAbilityModifier(character.ability.dex.score);
  const conMod = calcAbilityModifier(character.ability.con.score);
  const intMod = calcAbilityModifier(character.ability.int.score);
  const wisMod = calcAbilityModifier(character.ability.wis.score);
  const chaMod = calcAbilityModifier(character.ability.cha.score);
  const skillArray = [
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
  const ac =
    10 +
    dexMod +
    character.equipment.armor.bonus +
    character.equipment.shield.bonus;
  const dragonType =
    character.dragonType === null ? "" : `${character.dragonType} `;
  const profWeaponString = character.proficiency.weapons.join(", ");
  const profArmorString = character.proficiency.armor.length
    ? character.proficiency.armor.join(", ")
    : "none";
  const profLanguagesString = character.proficiency.languages.join(", ");
  const profInstrumentsString = character.proficiency.instruments.length
    ? character.proficiency.instruments.join(", ")
    : "none";
  const profToolsString = character.proficiency.tools.length
    ? character.proficiency.tools.join(", ")
    : "none";
  const attackMod = character.equipment.weapon.property.finesse
    ? (attackMod = dexMod > strMod ? dexMod : strMod)
    : strMod;

  const attackBonus = () => {
    if (character.equipment.weapon.proficiency.length) {
      character.equipment.weapon.proficiency.forEach((proficiency) => {
        if (character.proficiency.skills.includes(proficiency)) {
          return (
            proficiencyBonus + attackMod + character.equipment.weapon.magic
          );
        }
        return attackMod + character.equipment.weapon.magic;
      });
    } else {
      return proficiencyBonus + attackMod + character.equipment.weapon.magic;
    }
  };

  const damageString =
    character.equipment.weapon.damage.max === 1
      ? `1 + ${attackMod} ${character.equipment.weapon.type} damage`
      : `${character.equipment.weapon.damage.min}d${character.equipment.weapon.damage.max} + ${attackMod} ${character.equipment.weapon.type} damage`;
  const weaponString = `${character.equipment.weapon.name} - ${
    attackBonus() >= 0 ? "+" + attackBonus() : attackBonus()
  } to attack - ${damageString}`;

  //add tempHp
  //add deathsaves
  //add Inspiration
  return (
    <div>
      <h2>{character.name}</h2>
      <h4>
        Level {character.level} {dragonType}
        {character.race} {character.class}
      </h4>
      <p>Alignment: {character.alignment}</p>
      <p>Background: {character.background}</p>
      <hr />
      <h4>Armor Class: {ac}</h4>
      <h4>
        Initiative: {dexMod >= 0 ? "+" : ""}
        {dexMod}
      </h4>
      <h4>Speed: {character.speed} feet</h4>
      <h4>
        HP: {character.hp.current}/{character.hp.max}
      </h4>
      <h4>Proficiency Bonus: {proficiencyBonus}</h4>
      <p>Abilities:</p>
      <ul>
        <li>
          Strength: {character.ability.str.score} ({strMod >= 0 ? "+" : ""}
          {strMod})
        </li>
        <li>
          Dexterity: {character.ability.dex.score} ({dexMod >= 0 ? "+" : ""}
          {dexMod})
        </li>
        <li>
          Constitution: {character.ability.con.score} ({conMod >= 0 ? "+" : ""}
          {conMod})
        </li>
        <li>
          Intelligence: {character.ability.int.score} ({intMod >= 0 ? "+" : ""}
          {intMod})
        </li>
        <li>
          Wisdom: {character.ability.wis.score} ({wisMod >= 0 ? "+" : ""}
          {wisMod})
        </li>
        <li>
          Charisma: {character.ability.cha.score} ({chaMod >= 0 ? "+" : ""}
          {chaMod})
        </li>
      </ul>
      <p>Weapon proficiencies: {profWeaponString}</p>
      <p>Armor proficiencies: {profArmorString}</p>
      <hr />
      <h3>Skills</h3>
      <ul style={{ listStyle: "none" }}>
        {skillArray.map((skill) => {
          let abilityString;
          let abilityMod;
          let proficiency = 0;
          let checkbox = "\u2610";
          if (character.proficiency.skills.includes(skill)) {
            proficiency = proficiencyBonus;
            checkbox = "\u2611";
          }
          switch (skill) {
            case "Athletics":
              abilityString = "Str";
              abilityMod = strMod;
              break;
            case "Acrobatics":
            case "Sleight of Hand":
            case "Stealth":
              abilityString = "Dex";
              abilityMod = dexMod;
              break;
            case "Arcana":
            case "History":
            case "Investigation":
            case "Nature":
            case "Religion":
              abilityString = "Int";
              abilityMod = intMod;
              break;
            case "Animal Handling":
            case "Insight":
            case "Medicine":
            case "Perception":
            case "Survival":
              abilityString = "Wis";
              abilityMod = wisMod;
              break;
            case "Deception":
            case "Intimidation":
            case "Performance":
            case "Persuasion":
              abilityString = "Cha";
              abilityMod = chaMod;
              break;
          }
          const score = abilityMod + proficiency;
          const plus = score >= 0 ? "+" : "";
          return (
            <li>
              {checkbox}&nbsp;
              <u>
                &nbsp;
                {plus}
                {score}
                &nbsp;
              </u>{" "}
              {skill} ({abilityString})
            </li>
          );
        })}
      </ul>
      <p>
        <u>
          &nbsp;
          {character.proficiency.skills.includes("Perception")
            ? 10 + proficiencyBonus + wisMod
            : 10 + wisMod}
          &nbsp;
        </u>{" "}
        Passive wisdom (perception)
      </p>

      <p>Languages: {profLanguagesString}</p>
      <p>Known tools: {profToolsString}</p>
      <p>Known instruments: {profInstrumentsString}</p>
      <hr />
      <h3>Equipment</h3>
      <p>
        Weapon: {weaponString}
      </p>
      <button onClick={() => handleDeleteCharacter(character.id)}>Delete Character</button>
    </div>
  );
  //add ddl to change weapons
}
