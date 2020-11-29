const NewDocPopup = ({createNewDoc,closePopup}) =>{
    return(
        <div className='new-doc-popup'>
                <button onClick={closePopup} className='close-btn'><i class="fas fa-times"></i></button>
                <form onSubmit={createNewDoc}>
                <p> Enter the name of the document</p>
                <input type="text" name="docName" autocomplete="off"  />
                <input type="submit" />
                </form>
            </div>
    )
}

export default NewDocPopup