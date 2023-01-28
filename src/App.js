import React , {useState} from 'react'

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'


import Login from './pages/Login'
import HomePage from './pages/HomePage'


firebase.initializeApp({
  apiKey: "AIzaSyCakj_2bcyYwbORXNQ8GVi1CU1tjxp5HL8",
  authDomain: "chattest-25ba9.firebaseapp.com",
  projectId: "chattest-25ba9",
  storageBucket: "chattest-25ba9.appspot.com",
  messagingSenderId: "16913355187",
  appId: "1:16913355187:web:543efb1b9e78e9b15abbc6"
})
const auth = firebase.auth()
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      
        {user ?     <HomePage auth={auth} firestore={firestore}/> : <Login auth={auth} />}




   
   
    </>
  );
}





export default App;
