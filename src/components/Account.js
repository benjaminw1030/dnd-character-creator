import React from "react";
import { connect } from "react-redux";
import { withFirestore, isLoaded } from "react-redux-firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//potentially build in password/email rules

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmText: "",
    };
  }

  doSignUp = (event) => {
    event.preventDefault();
    const auth = getAuth();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordConfirmation = event.target.confirmPassword.value;
    if (password === passwordConfirmation) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          this.setState({ confirmText: "Successfully signed up!" });
        })
        .catch((error) => {
          this.setState({ confirmText: error.message });
        });
    }
  };
  //potentially refactor to add User collection, then add Character collection to user docs

  doLogin = (event) => {
    event.preventDefault();
    const auth = getAuth();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        this.setState({ confirmText: "Successfully Signed in!" });
      })
      .catch((error) => {
        this.setState({ confirmText: error.message });
      });
  };

  doLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.setState({ confirmText: "You have been logged out." });
      })
      .catch((error) => {
        this.setState({ confirmText: error.message });
      });
  };

  render() {
    const auth = getAuth();
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
            <form onSubmit={this.doSignUp}>
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
            <form onSubmit={this.doLogin}>
              <input type="text" name="email" placeholder="email" />
              <input type="text" name="password" placeholder="password" />
              <button type="submit">Log in</button>
            </form>
          </div>
          <p>{this.state.confirmText}</p>
        </div>
      );
    } else if (isLoaded(auth) && auth.currentUser != null) {
      return (
        <div>
          <div>
            <button onClick={this.doLogout}>Logout</button>
          </div>
          <p>{this.state.confirmText}</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    confirmText: state.confirmText,
  };
};

Account = connect(mapStateToProps)(Account);

export default withFirestore(Account);
