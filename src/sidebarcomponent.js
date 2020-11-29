const SiderBarComponent = ({ docs, selectNote, deleteNote, newDoc }) => {
  return (
    <div className="sidebar">
      <button onClick={newDoc} className="new-doc-btn">
        new doc
      </button>
      <div>
        {docs.map((item, index) => {
          return (
            <div className="sidebar-btn-container" key={index}>
              <button className="sidebar-btn" onClick={selectNote} id={index}>
                {item.name}
              </button>
              <button className="delete-btn" onClick={deleteNote} id={index}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SiderBarComponent;
