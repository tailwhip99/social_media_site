import React from "react"


export default function SignOut({auth}) {
    return auth.currentUser && (
      <div className="sign-out">
           
      <button onClick={() => auth.signOut()}>Sign Out</button>
      <img  src={auth.currentUser.photoURL} alt="" />
      <p maxLength="4">user_{auth.currentUser.uid.substring(0,5)}</p>
      </div>
    )
  }