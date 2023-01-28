import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

import '../styles/Login.scss'

export default function Login({auth}) {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
   
    }
    return (
      <div className="login">
        <div className="content">
          <img src="https://mail.google.com/mail/u/1?ui=2&ik=70c1e752e1&attid=0.0&permmsgid=msg-f:1756183216023160501&th=185f37548f9046b5&view=fimg&disp=thd&attbid=ANGjdJ_nEgh9kkdDrR9NvrH_7aDSzjWX0QPeObefYkphaoAPyfEU4aJpdfBqRJ1R1N-EqXtLteLjShxjnMmh7KEPXYVGRDySSHPifiagLwelTAVeLUnJOIsXSZ0YPfY&ats=2524608000000&sz=w1920-h816" alt=""/>
          <h1>Welcome to Oliver's site</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
     
      </div>
    )
  }