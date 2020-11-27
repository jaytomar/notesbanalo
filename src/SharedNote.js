import { useEffect, useState } from "react"
import ContentEditable from 'react-contenteditable'

import  { dbService } from './fbase'




const SharedNote = ({match}) => {
const[html,setHtml]=useState({id:'test'})

useEffect(()=>{
    dbService
    .collection("notes").doc(match.params.id)
    .get()
    .then((res)=>{
        if (res.exists) {
            setHtml(res.data())
        }
        else{
            setHtml('')
        }
    })
},[])



    return(
        <div className="App default">
        {html.id ? (
        <div className='sheet-read-only'>
        <div>
          <b>
          <p className="editable doc-title">{html.name}</p>
          </b>
        </div>
        <ContentEditable
        className='editable'
        html={html.doc}
        disabled={true}
        spellCheck='false'
        />
        </div>
        )
            :(
                <div>
                <b>
                <p className="editable doc-title">Document Not Found</p>
                </b>
              </div>
            )
        }
      
        </div>
    )
}

export default SharedNote