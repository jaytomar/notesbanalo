import ContentEditable from "react-contenteditable";
import React from "react";
import "./app.css";
import SelectMenu from "./SelectMenu";
import SlashMenu from "./SlashMenu";
import { dbService } from "./fbase";
import {
  extract,
} from 'oembed-parser';
// var htmlcopy='<div class="editable" spellcheck="false" contenteditable="true"><h1>Heading </h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><hr><h1>Heading 2</h1><div style="text-align: left;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <b>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </b>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe<i>nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt m</i>ollit anim id est laborum.</div><div style="text-align: right; "><div><br style="text-align: start;"></div></div><div><br></div><p> </p></div>'
const getCaretCoordinates = () => {
  let x, y, width;
  const selection = window.getSelection();
  if (selection.rangeCount !== 0) {
    const range = selection.getRangeAt(0).cloneRange();
    range.collapse(false);
    const rect = range.getBoundingClientRect();
    if (rect) {
      x = rect.left;
      y = rect.top;
      width = rect.width;
    }
  }
  return { x, y, width };
};

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDoc: this.props.currentDoc,
      html: this.props.html,
      isMenuOpen: false,
      isSlashMenuOpen: false,
      menuPosition: {
        x: null,
        y: null,
        width: null,
      },
      prevkey: null,
    };
    this.onMouseDownHandler = this.onMouseDownHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
    this.SaveDoc = this.SaveDoc.bind(this);
    this.onPaste=this.onPaste.bind(this)
  }
  componentDidUpdate() {

    if (this.props.currentDoc.id != this.state.currentDoc.id) {
      this.setState({
        currentDoc: this.props.currentDoc,
        html: this.props.html,
      });
    }
  }
  onPaste =(e) =>{
    const embed=e.clipboardData.getData('text')
    const url = 'https://www.youtube.com/watch?v=8jPQjjsBbIc';

    extract(url).then((oembed) => {
      console.log(oembed);
    }).catch((err) => {
      console.trace(err);
    });
  }

  
  SaveDoc() {
    dbService
      .collection("notes")
      .doc(this.props.currentDoc.id)
      .update({
        doc: this.state.html,
      })
      .then(() => {
        console.log("succesfully added");
      });
  }
  onKeyDownHandler = (e) => {
    if (e.key == "." && this.state.prevkey == ".") {
      e.preventDefault();
      const { x, y, width } = getCaretCoordinates();
      this.setState({
        isSlashMenuOpen: true,
        menuPosition: { x, y, width },
        prevkey: null,
      });
    } else if (e.key == ".") {
      this.setState({
        prevkey: ".",
      });
    } else {
      this.setState({
        isSlashMenuOpen: false,
        prevkey: null,
      });
    }
  };
  mouseUp = () => {
    const selection = document.getSelection();
    if (selection.type != "None") {
      const { x, y, width } = getCaretCoordinates();
      if (selection.type != "Caret") {
        this.setState({
          isMenuOpen: true,
          menuPosition: { x, y, width },
          isSlashMenuOpen: false,
        });
      }
    }
  };
  onMouseDownHandler(e) {
    document.getSelection().removeAllRanges();
    if (this.state.isMenuOpen) {
      this.setState({
        isMenuOpen: false,
        isSlashMenuOpen: false,
      });
    }
    if (this.state.isSlashMenuOpen) {
      this.setState({
        isMenuOpen: false,
        isSlashMenuOpen: false,
      });
    }
  }

  onChangeHandler(e) {
    this.setState({ html: e.target.value, isMenuOpen: false });
  }

  render = () => {
    const date = this.state.currentDoc.createdAt
    const dateobj = date
    return (
      <div>
        <div
          className="App default"
          onMouseUp={this.mouseUp}
          onKeyDown={this.onKeyDownHandler}
        >
          <div className="sheet">
            {this.state.isMenuOpen && (
              <SelectMenu position={this.state.menuPosition} />
            )}
            {this.state.isSlashMenuOpen && (
              <SlashMenu position={this.state.menuPosition} />
            )}
            <div>
              <b>
              <p className="editable doc-title">{this.state.currentDoc.name}</p>
              </b>
            </div>
            <ContentEditable
              className="editable"
              html={this.state.html}
              disabled={false}
              onChange={this.onChangeHandler}
              onMouseDown={this.onMouseDownHandler}
              onPaste={this.onPaste}
              spellCheck="false"
            />
            <button onClick={this.SaveDoc} className="save-btn">
              save doc
            </button>
          </div>
        </div>
      </div>
    );
  };
}

export default Notes;
