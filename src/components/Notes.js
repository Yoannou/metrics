import './Notes.css'

function Notes({openStatus, notepadChange}) {

  const openness = openStatus === 'open' ? 'notes-open' : '';

  return (
    <div className={"notes " + openness}>
      <form className="notes-form">
        <label className="notes-label" htmlFor="notes-field">Cooking Notes:</label>
        <textarea id="notes-field" name="notes-field" rows="4" cols="50" defaultValue="What's on the menu?">
        </textarea> 
      </form>
      <div className="notes-tab"  onClick={notepadChange}>
        <h3>Notepad</h3>
      </div>
    </div>
  );
}

export default Notes;