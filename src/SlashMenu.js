import { useState } from 'react';
import './selectmenu.css'

function onMenuSelect(e){
    const style=e.target.parentNode.value || e.target.value
    if(style=='insertHorizontalRule'){
        document.execCommand(style,false);
        document.execCommand('insertHtml',false,'<br>');
    }
    if(style=='formatBlock'){
        document.execCommand(style,false);
    }
}
const onImageUpload = (e) => {
    const {target:{files}} = e;
    const theFile= files[0];
    const reader= new FileReader();
    reader.onloadend = (finish) => {
        document.execCommand('insertHTML', false, `<div contenteditable='true'><img src=${reader.result} /> </div>`)

    }
    reader.readAsDataURL(theFile)
}   

const SlashMenu = (props) => {
    const x =props.position.x
    const y =props.position.y + window.scrollY
    const pos = {position : "absolute", top: y, left: x }
    return( 
        <div style={pos} className='menu-container'>
            <div  className='menu'>
                <label for="file-upload" className="custom-file-upload">
                <i className="fas fa-upload"></i>
                </label>
                <input id='file-upload' type='file' accept='image/*' onChange={onImageUpload} className='image-upload'/>
                <button onClick={onMenuSelect} value='insertHorizontalRule'> divider </button>
            </div>
        </div>
    )
  }

  export default SlashMenu