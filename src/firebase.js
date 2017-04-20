import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAuVHGIVYxHxXmyJyRbw8V73S2zTXz39Ac",
    authDomain: "first-flight-with-friend-c2cad.firebaseapp.com",
    databaseURL: "https://first-flight-with-friend-c2cad.firebaseio.com",
    projectId: "first-flight-with-friend-c2cad",
    storageBucket: "first-flight-with-friend-c2cad.appspot.com",
    messagingSenderId: "792737063121"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();