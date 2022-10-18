import { AiOutlineCloseSquare } from 'react-icons/ai'

import './Notes.css'

function Notes({openStatus, notepadChange}) {

  const openness = openStatus === 'open' ? 'notes-open' : '';

  return (
    <div className={"notes " + openness}>
      <form className="notes-form">
        <label className="notes-label" htmlFor="notes-field">Cooking Notes:</label>
        <textarea id="notes-field" name="notes-field" rows="4" cols="50">
        </textarea>
        <div className="notes-close-wrapper">
          <AiOutlineCloseSquare className="notes-close" onClick={notepadChange}/>
        </div>
      </form>
      {/*
      <div className="notes-tab"  onClick={notepadChange}>
        <h3>Notepad</h3>
      </div>
      */}
    </div>
  );
}

export default Notes;
