const ShareMenu = ({currentDoc}) => {
const link = `${window.location.href}notes/${currentDoc.id}`
    return(
     <div className='share-menu-container'>
         <div className='share-menu'>
             <p>copy the link below to share</p>
            <input type="text" value={link} readonly/>
         </div>
     </div>
 )
}
export default ShareMenu