import React, { useState } from 'react'

export default function SidebarMenu({ setShownComponent, character, handleSaveCharacter }) {
  const [showMainMenu, setShowMainMenu] = useState(true);
  let sideButtons
  if (character === null) {
    sideButtons = (
      <>
        <button onClick={() => setShownComponent("newChar")}>New Character</button>
        <button onClick={() => setShownComponent("charList")}>Load Character</button>
      </>
    )
    } else if (!showMainMenu) {
      sideButtons = (
        <>
          <button onClick={() => setShownComponent("main")}>Main</button>
          <button onClick={() => setShownComponent("inventory")}>Inventory</button>
          <button onClick={() => setShownComponent("skills")}>Skills</button>
          <button onClick={() => setShownComponent("abilities")}>Abilities</button>
          <button onClick={() => setShownComponent("description")}>Description</button>
          <button onClick={() => setShownComponent("personality")}>Personality</button>
          <button onClick={() => setShowMainMenu(true)}>Main Menu</button>
        </>
        )
    } else {
    sideButtons = (
    <>
      <button onClick={() => setShownComponent("newChar")}>New Character</button>
      <button onClick={() => setShownComponent("charList")}>Load Character</button>
      <button onClick={() => handleSaveCharacter(character)}>Save Character</button>
      <button onClick={() => setShowMainMenu(false)}>Back to Character</button>
    </>
    )
  }
  return (
    <div>
      {sideButtons}
    </div>
  )
}