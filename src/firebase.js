import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyB4PECKswHaP4BQ70k1TfALdy6wqRFl9Js",
	authDomain: "challenge-3fd94.firebaseapp.com",
	databaseURL: "https://challenge-3fd94.firebaseio.com",
	projectId: "challenge-3fd94",
	storageBucket: "challenge-3fd94.appspot.com",
	messagingSenderId: "1037945161284",
	appId: "1:1037945161284:web:db73f285a8fee5bd6f1e11",
	measurementId: "G-KBZKE1SHVL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
