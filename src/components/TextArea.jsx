import React , {useState} from "react";
import '../styles/TextArea.scss'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

 const TextArea = ({auth,messagesRef}) => {
  const [textValue,setTextValue] = useState('')
    const [titleValue,setTitleValue] = useState('')
    const [imageValue,setImageValue] = useState('')
    const closeTextArea = () => {
     const textarea = document.querySelector('.textarea')
     textarea.style.visibility = "hidden"
    }
  const SendMessage = async (e) => {
    e.preventDefault();
    


    const {uid , photoURL} = auth.currentUser ;
 
    await messagesRef.add({
      title:titleValue,
      text: textValue,
      image: imageValue,
      date: Date.now(),
     
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
 
    setTextValue('')
    setTitleValue('')
    setImageValue('')
  }
    return(
        <div className="textarea">

          <div  onClick={closeTextArea}  className="closeButton">
          <svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
          </div>

          <h1>Create Post</h1>

          <form className="send-message" onSubmit={SendMessage}>
          <textarea className="title"  placeholder="Create Title..." maxLength="30" value={titleValue} onChange={(e) => setTitleValue(e.target.value)}/>
          <textarea className="post"  placeholder="Create Post..." maxLength="100" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
          <input className="add-image" placeholder="Add image url" value={imageValue} onChange={(e) => setImageValue(e.target.value)}  ></input>
          <button onClick={closeTextArea} className="publish" type="submit">Publish</button>
        
          </form>
      </div>
    )
}

export default TextArea