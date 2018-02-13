import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBFmuUfbFnpbNhjc8X11bK5gKhkXzpgXP4",
    authDomain: "expensify-bec63.firebaseapp.com",
    databaseURL: "https://expensify-bec63.firebaseio.com",
    projectId: "expensify-bec63",
    storageBucket: "expensify-bec63.appspot.com",
    messagingSenderId: "142906129498"
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };