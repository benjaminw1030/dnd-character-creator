import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  firestore: firestoreReducer,
});

export default rootReducer;
