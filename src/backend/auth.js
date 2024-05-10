import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebaseConfig'
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";
import { createNewUserData } from "./database";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function createNewUser(email, password, firstname, lastname, studentNumber){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        createNewUserData(user.uid, email, firstname, lastname, studentNumber)
        window.location.href = '/';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });
}

export async function signInUser(email, password){

    try {
        await signInWithEmailAndPassword(auth, email, password)
        return true
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return false
    }

}

export function getUser(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log(uid)
        } else {
          // User is signed out
          console.log("User not logged in")
        }
    });
}

export function signOutUser(){
    signOut(auth).then(() => {
        window.location.href = '/';
      }).catch((error) => {
        // An error happened.
      });
}

export async function passwordReset(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        console.log("sent");
        return true;
    } catch (error) {
        //console.error(error);
        return error; // Return the error object
    }
}

export function redirectUserToHome(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log(uid)
          window.location.href = '/';
        } else {
          // User is signed out
          console.log("User not logged in")
        }
    });
}
