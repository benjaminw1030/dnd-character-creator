import React from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import * as a from "../actions";
import SidebarMenu from "./SidebarMenu";
import SidebarChar from "./SidebarChar";
import NewChar from "./NewChar";
import CharList from "./CharList";
import Options from "./Options";
import CharInfo from "./CharInfo";

export default function CharacterControl() {
  return (
    <div>
      <SidebarMenu />
      <SidebarChar />
      <NewChar />
      <CharInfo />
      <CharList />
      <Options />
    </div>
  );
}
