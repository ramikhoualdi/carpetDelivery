import * as React from "react";
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMMJEFJUY8042Pg1MY7wvqbiTqCAGCP-Y",
  authDomain: "carpet-cleaning-2062b.firebaseapp.com",
  projectId: "carpet-cleaning-2062b",
  storageBucket: "carpet-cleaning-2062b.appspot.com",
  messagingSenderId: "542236558748",
  appId: "1:542236558748:web:dbc30b95c159f363ae7459",
  measurementId: "G-BEWBN5J1Q4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default () => {
  return {
    firebase,
    auth,
  };
};
