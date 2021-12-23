import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

function CharList({ currentUserId, handleSelectCharacter }) {
  useFirestoreConnect([
    {
      collection: "characters",
      where: ["uid", "==", currentUserId],
    },
  ]);

  const characters = useSelector((state) => state.firestore.ordered.characters);

  if (isEmpty(characters)) {
    return (
      <div>
        <p>No characters have been created yet.</p>
      </div>
    );
  } else if (isLoaded(characters)) {
    return (
      <div>
        <ul>
          {characters.map((character) => {
            return (
              <li onClick={() => handleSelectCharacter(character)}>
                {character.name}: Level {character.level} {character.class}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div><p>Loading...</p></div>
    )
  }
}

export default CharList;
