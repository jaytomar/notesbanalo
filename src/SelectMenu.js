import './selectmenu.css'

function onMenuSelect(e){
    const style=e.target.parentNode.value || e.target.value
    const node = window.getSelection().getRangeAt(0).startContainer.parentNode.nodeName
    const color=window.getSelection().getRangeAt(0).startContainer.parentNode.style.backgroundColor
    if(node==='H1' || node==='H2' || node==='H3'){
        if(style==node){
            document.execCommand('formatblock',false,'div')
        }
        else{
            document.execCommand('formatblock',false,style)
        }
    }
    else if((style==='H1' || style==='H2' || style==='H3') && node!=='LI'){
        if(node==='B' || node==='I' || node==='STRIKE' || node==='U' ){
        
            document.execCommand('removeFormat',false);
        }
        document.execCommand('formatblock',false,style)
    }
    else {
        document.execCommand(style,false);
    }
    if(style==='hiliteColor'){
        if(color!==''){
            document.execCommand('removeFormat',false);
        }
        else{
            document.execCommand('hiliteColor',false, '#DAF7A6')
        }
    }
    if(style==='formatBlock'){
        document.execCommand(style,false);
    }
    
}

const SelectMenu = (props) => {
    const x =props.position.x + props.position.width/2 -200
    const y =props.position.y-30 + window.scrollY
    const pos = {position : "absolute", top: y, left: x }
    return( 
        <div style={pos} className='menu-container'>
            <div  className='menu'>
                <button onClick={onMenuSelect} value='italic'> <i className="fas fa-italic"></i></button>
                <button onClick={onMenuSelect} value='bold'> <i className="fas fa-bold"></i> </button>
                <button onClick={onMenuSelect} value='underline'> <i className="fas fa-underline"></i> </button>
                <button onClick={onMenuSelect} value='strikethrough'> <i className="fas fa-strikethrough"></i> </button>
                <button onClick={onMenuSelect} value='H1'> <b>H1</b>  </button>
                <button onClick={onMenuSelect} value='H2'> <b>H2</b>  </button>
                <button onClick={onMenuSelect} value='H3'> <b>H3</b></button>
                <button onClick={onMenuSelect} value='insertOrderedList'> <i className="fas fa-list-ol"></i> </button>
                <button onClick={onMenuSelect} value='insertUnorderedList'> <i className="fas fa-list-ul"></i></button>
                <button onClick={onMenuSelect} value='hiliteColor'> <i className="fas fa-highlighter"></i></button>
            </div>
        </div>
    )
  }

  export default SelectMenu