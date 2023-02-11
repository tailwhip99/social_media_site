import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import image2 from './image2.png'
import '../styles/Login.scss'

export default function Login({auth}) {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
   
    }
    return (
      <div className="login">
        <div className="content">
          <img src={image2} alt=""/>
          <h1>Welcome to Oliver's site</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
     
      </div>
    )
  }