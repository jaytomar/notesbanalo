import React, { useEffect, useState } from 'react'
import './app.css'
import Sidebar from './sidebar'
import Notes from './notes';
import  { authService, dbService } from './fbase'
import { v4 as uuidv4 } from 'uuid'

const Main = ({userObj}) => {
  
  const docsarr = [
    {
      id : '1234',
      name : 'test',
      doc : 'hello 1'
    }
  ]

  const signOut = () => {
    authService.signOut()
  }
  
const selectNote = (e) => {
  const index = e.target.id
  setHtml(docs[index].doc)
  setCurrentDoc(docs[index])
  fetchDocs()

  
}


const deleteNote = (e) => {
  const index = e.target.parentNode.id || e.target.id
  dbService.collection('users').doc(userObj.user.uid).collection('notes').doc(docs[index].id).delete()
  .then(function() {
    console.log("Document successfully deleted!");
    fetchDocs()
  })
  setHtml('document deleted')



}

const newDoc = () => {
  setCount(count+1)
  var uuid = uuidv4()
  var data = {
      user : userObj.user.uid,
      id : uuid,
      createdAt: Date.now(),
      name : 'document ' +(count),
      doc : 'You can highlight this text to apply styles. type the period (.) key twice for more option'
  }
  dbService
  .collection('notes')
  .doc(uuid)
  .set(data)

  fetchDocs()
}

useEffect(() => {
  fetchDocs()
},[]);

const fetchDocs = () =>{
  if(userObj){
    dbService.collection('notes').where("user", "==", userObj.user.uid).get()
    .then((doc)=>{
      const obj = doc.docs.map((item)=>{
        return item.data()
      })
      setDocs([...obj])
      setCurrentDoc(docs[0])
    })
    setInit(true)
    }
}

const [docs, setDocs] = useState(docsarr)
const [html, setHtml]= useState("create or select a document to show its content")
const [currentDoc, setCurrentDoc] = useState(docs[0])
const[initialize, setInit] = useState(false)
const [count, setCount]=useState(1)
    return (
      <div>
        <div>
            <nav>
              <div>
              <p className='logo'>notebanalo</p>
              </div>
            <button onClick={signOut} className='sign-out-btn'>sign out</button>
            </nav>
        </div>
          <div className='sidebar'>
          <button onClick={newDoc} className='new-doc-btn'>new doc</button>
          <div>
          {
            docs.map((item,index)=>{
                return  (
                  <div className='sidebar-btn-container' key={index}>
                    <button className='sidebar-btn' onClick={selectNote} id={index} >{item.name}</button>
                    <button className='delete-btn' onClick={deleteNote} id={index} ><i className="fas fa-trash-alt"></i></button>
                  </div>
                )
            })
          }
          </div>  
      </div>
      <Notes userObj={userObj} html={html} currentDoc={currentDoc}/>
      </div>
    );
}


export default Main;
