const NewDocPopup = ({createNewDoc}) =>{
    return(
        <div className='new-doc-popup'>
                <form onSubmit={createNewDoc}>
                <p>enter the name of the document</p>
                <input type="text" name="docName" autocomplete="off"  />
                <input type="submit" />
                </form>
            </div>
    )
}

export default NewDocPopup