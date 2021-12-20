import React, { useState, useEffect } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { withFirestore, isLoaded } from "react-redux-firebase";
import * as a from "../actions";
import SidebarMenu from "./SidebarMenu";
import NewChar from "./NewChar";
import CharList from "./CharList";
import Options from "./Options";
import CharInfo from "./CharInfo";
import { getAuth } from "firebase/auth";

function CharacterControl() {
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const character = null;
  // const character = useSelector((state) => state.character);
  const [shownComponent, setShownComponent] = useState("none");
  const auth = getAuth();

  const handleNewCharacter = () => {

  };

  const handleSaveCharacter = () => {};
  // console.log(auth.currentUser.uid);
  let mainField;
  if (!isLoaded(auth)) {
    mainField = (
      <>
        <p>Loading</p>
      </>
    );
  } else if (isLoaded(auth) && auth.currentUser === null) {
    mainField = (
      <>
        <p>Log in to add and view characters.</p>
      </>
    );
  } else if (shownComponent === "newchar") {
    mainField = (
      <>
        <NewChar handleNewCharacter={handleNewCharacter} uid={auth.currentUser.uid} />
      </>
    );
  } else if (shownComponent === "charlist") {
    mainField = (
      <>
        <CharList />
      </>
    );
  } else if (character != null && shownComponent === "charinfo") {
    mainField = (
      <>
        <CharInfo />
      </>
    );
  } else {
    mainField = (
      <>
        <p>Load or create a character to see details.</p>
      </>
    );
  }

  return (
    <>
      <SidebarMenu
        character={character}
        setShownComponent={setShownComponent}
        handleSaveCharacter={handleSaveCharacter}
      />
      <div>
        <div>{mainField}</div>
      </div>
    </>
  );
}

export default CharacterControl;
//potentially add in options later
