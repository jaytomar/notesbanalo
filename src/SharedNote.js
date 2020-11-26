import { useEffect, useState } from "react"
import ContentEditable from 'react-contenteditable'

import  { dbService } from './fbase'




const SharedNote = ({match}) => {
const[html,setHtml]=useState('')

useEffect(()=>{
    dbService
    .collection("notes").doc(match.params.id)
    .get()
    .then((res)=>{
        if (res.exists) {
            setHtml(res.data().doc)
        }
    })
},[])



    return(
        <div className="App default">
            <div className='sheet-read-only'>
            <ContentEditable
            className='editable'
            html={html}
            disabled={true}
            spellCheck='false'
            />
            </div>
        </div>
    )
}

export default SharedNote