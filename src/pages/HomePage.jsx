import React , {useState} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'


import uniqid from 'uniqid'
import TextArea from '../components/TextArea'
import Header from '../components/Header'
import ChatMessage from "../components/ChatMessage";

import '../styles/Home.scss'

export default function HomePage({firestore,auth})  {
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt', "desc",).limit(6)
    
    const [messages] = useCollectionData(query, {idField:'id'})
   
     
   
     

     const openTextArea = () => {
       const textarea = document.querySelector('.textarea')
       textarea.style.visibility="visible"
     }
    return (
      <>
      <Header className="header" auth={auth} />
      <TextArea auth ={auth} messagesRef={messagesRef}   />
     <div className="home-page">
    
   
      <div className="create-post">
      <img className="post-image"  src={auth.currentUser.photoURL} alt="" />
   <input onClick={openTextArea} placeholder="Create Post"  />
   </div>

  
 

     <div className="chat-messages">
        {messages && messages.map(msg => <ChatMessage
         className="chat-message"
         key={msg.id}
          message={msg} 
          auth={auth} 
          />)}
        </div>
   
   
     </div>
     </>
   )
   }
   
   