import React from 'react';
import firebase from 'firebase/compat/app';

function Login() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  }
}