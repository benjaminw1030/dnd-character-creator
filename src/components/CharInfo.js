import React from "react";
import { calcAbilityModifier } from "../utilities/Calc"

export default function CharInfo({ character }) {
  const proficiencyBonus = character.level < 5 ? 2 : character.level < 9 ? 3 : character.level < 13 ? 4 : character.level < 17 ? 5 : 6
  const strMod = calcAbilityModifier(character.ability.str.score);
  const dexMod = calcAbilityModifier(character.ability.dex.score);
  const conMod = calcAbilityModifier(character.ability.con.score);
  const intMod = calcAbilityModifier(character.ability.int.score);
  const wisMod = calcAbilityModifier(character.ability.wis.score);
  const chaMod = calcAbilityModifier(character.ability.cha.score);
  const ac = dexMod + character.equipment.armor.bonus + character.equipment.shield.bonus
  const abiltyScoreList = (
    <ul>
      <li>Strength: {character.ability.str.score} ({strMod})</li>
      <li>Dexterity: {character.ability.dex.score} ({dexMod})</li>
      <li>Constitution: {character.ability.con.score} ({conMod})</li>
      <li>Intelligence: {character.ability.int.score} ({intMod})</li>
      <li>Wisdom: {character.ability.wis.score} ({wisMod})</li>
      <li>Charisma: {character.ability.cha.score} ({chaMod})</li>
    </ul>
  )
  return (
    <div>
      <h3>{character.name}</h3>
      <h4>Level {character.level} {character.class}</h4>
      <p>Alignment: {character.alignment}</p>
      <p>Background: {character.background}</p>
      <hr/>
      <p>Proficiency Bonus: {proficiencyBonus}</p>
      {abiltyScoreList}
    </div>
  );
}
