import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJQEjR2mJrfV_Yvm16NluBuHCaLS3r-_Y",
  authDomain: "pinterest-clone-32f0c.firebaseapp.com",
  projectId: "pinterest-clone-32f0c",
  storageBucket: "pinterest-clone-32f0c.appspot.com",
  messagingSenderId: "661306763932",
  appId: "1:661306763932:web:b420c2e8325bd84e865b59",
  measurementId: "G-94NFWHB4WJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db