// Before: version 8 (Old)
// import firebase from "firebase/app";
//firestore for database
// import "firebase/firestore";
// import "firebase/auth";

//After: version 9 compat (New)
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0q4XoVtinerTYePB1TpEzmCFsTtcCN14",
  authDomain: "crown-clothing-db-9b020.firebaseapp.com",
  projectId: "crown-clothing-db-9b020",
  storageBucket: "crown-clothing-db-9b020.appspot.com",
  messagingSenderId: "250460272857",
  appId: "1:250460272857:web:32c87dc7d4cca3ee09a6c8",
  measurementId: "G-J0KB972WHL",
};

// checking and creating new users to the database and if there already exist that user so does not replicate that data in the database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication utlitly
const provider = new firebase.auth.GoogleAuthProvider();
// it takes some custom parameters
// prompt == what it does is that it triggers google popup  // whenever we use googleAuthProvider for sign in
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
