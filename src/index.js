import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import "firebase/auth";

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
        userProfile: "users",
        useFirestoreForProfile: true,
    },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)
