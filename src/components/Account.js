import React from "react";
import firebase from "firebase/compat/app";
import { isLoaded } from "react-redux-firebase";

//potentially build in password/email rules

function Account() {
  let confirmText;

  function doSignUp(event) {
    event.preventDefault();
    const userName = event.target.userName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordConfirmation = event.target.passwordConfirmation.value;
    if (password === passwordConfirmation) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function () {
          confirmText = "Successfully signed up!";
        })
        .catch(function (error) {
          confirmText = error.message;
        });
    }
  }

  function doLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        confirmText = "Successfully Signed in!";
      })
      .catch(function (error) {
        confirmText = error.message;
      });
  }

  function doLogout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        confirmText = "You have been logged out.";
      })
      .catch(function (error) {
        confirmText = error.message;
      });
  }

  const auth = this.props.firebase.auth();
  if (!isLoaded(auth)) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (isLoaded(auth) && auth.currentUser === null) {
    return (
      <div>
        <div>
          <h1>Create a new account:</h1>
          <form onSubmit={doSignUp}>
            <input type="text" name="userName" placeholder="User Name" />
            <input type="text" name="email" placeholder="email" />
            <input type="text" name="password" placeholder="password" />
            <input
              type="text"
              name="confirmPassword"
              placeholder="confirmPassword"
            />
            <button type="submit">Create Account</button>
          </form>
        </div>
        <div>
          <h1>Log in to existing account:</h1>
          <form onSubmit={doLogin}>
            <input type="text" name="email" placeholder="email" />
            <input type="text" name="password" placeholder="password" />
            <button type="submit">Log in</button>
          </form>
        </div>
        <p>{confirmText}</p>
      </div>
    );
  } else if (isLoaded(auth) && auth.currentUser != null) {
    return (
      <div>
        <div>
          <button onClick={doLogout}>Logout</button>
        </div>
        <p>{confirmText}</p>
      </div>
    );
  }
}

export default Account;