import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../firebase'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import { getAuth, signInAnonymously , onAuthStateChanged } from "firebase/auth";
const style = {
    wrapper: `flex justify-center`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}


// const authh = getAuth();
// signInAnonymously(authh)
//   .then(() => {
//     // Signed in..
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

//   const authhh = getAuth();
//   onAuthStateChanged(authhh, (user) => {
//     if (user) {
//       const uid = user.uid;

//     } else {
// //signed out
//     }
//   });



const SignIn = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn