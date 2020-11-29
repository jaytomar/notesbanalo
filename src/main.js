import React, { useEffect, useState } from "react";
import { authService, dbService } from "./fbase";
import { v4 as uuidv4 } from "uuid";
import "./app.css";
import Notes from "./notes";
import NewDocPopup from "./NewDocPopup";
import ShareMenu from "./sharemenu";
import SiderBarComponent from "./sidebarcomponent";

const Main = ({ userObj }) => {
  const docsarr = [
    {
      id: "",
      name: "",
      doc: "",
    },
  ];
  const closePopup = () => {
    setNewDocForm(false)
  }
  const signOut = () => {
    authService.signOut();
  };

  const selectNote = (e) => {
    const index = e.target.id;
    setHtml(docs[index].doc);
    setCurrentDoc(docs[index]);
    fetchDocs();
  };

  const shareDoc = (e) => {
    setisShareMenuOpen(!isShareMenuOpen);
  };

  const deleteNote = (e) => {
    const index = e.target.parentNode.id || e.target.id;
    dbService
      .collection("notes")
      .doc(docs[index].id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
        fetchDocs();
      });
    const deleteText =
      '<div class="editable" spellcheck="false" contenteditable="false">Document Deleted</div>';
    setCurrentDoc(docsarr);
    setHtml(deleteText);
  };

  const newDoc = () => {
    setNewDocForm(true);
  };

  const createNewDoc = (e) => {
    setNewDocForm(false);
    e.preventDefault();
    console.log(e.target.docName.value);
    const docName = e.target.docName.value || "untitled";
    var uuid = uuidv4();
    var data = {
      user: userObj.user.uid,
      id: uuid,
      createdAt: Date.now(),
      name: docName,
      doc:
        "<div>You can highlight this text to apply styles. type the period (.) key twice for more option</div>",
    };
    dbService.collection("notes").doc(uuid).set(data);

    fetchDocs();
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const fetchDocs = () => {
    if (userObj) {
      dbService
        .collection("notes")
        .where("user", "==", userObj.user.uid)
        .get()
        .then((doc) => {
          const obj = doc.docs.map((item) => {
            return item.data();
          });
          setDocs([...obj]);
        });
    }
  };
  const initText =
    '<div class="editable" spellcheck="false" contenteditable="false">create or select a document to show its content</div>';
  const [docs, setDocs] = useState(docsarr);
  const [html, setHtml] = useState(initText);
  const [currentDoc, setCurrentDoc] = useState(docs[0]);
  const [newDocForm, setNewDocForm] = useState(false);
  const [isShareMenuOpen, setisShareMenuOpen] = useState(false);

  return (
    <div>
      <nav>
        <p className="logo"><b>notes</b>banalo</p>
        <button onClick={signOut} className="sign-out-btn">
          sign out
        </button>
        {currentDoc.id &&
          (
          <button onClick={shareDoc} className="sign-out-btn">Share</button>
          )
        }
        
      </nav>
      {newDocForm && <NewDocPopup createNewDoc={createNewDoc} closePopup={closePopup}/>}
      {isShareMenuOpen && <ShareMenu currentDoc={currentDoc} />}
      <div className="sidebar">
        <button onClick={newDoc} className="new-doc-btn">
          new doc
        </button>
        <SiderBarComponent
          docs={docs}
          selectNote={selectNote}
          deleteNote={deleteNote}
          newDoc={newDoc}
        />
      </div>
      <Notes userObj={userObj} html={html} currentDoc={currentDoc} />
    </div>
  );
};

export default Main;
