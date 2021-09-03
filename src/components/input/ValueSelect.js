import './ValueSelect.css'

function ValueSelect({value, onChange}) {
  return (
    <div className="select value-select">
      <form className="form value-form">
        <label className="value-label">
          <input type="text" name="value"
            value={value} onChange={onChange}
            /*style={{width: value.length + "ch"}}*//>
        </label>
      </form>
    </div>
  );
}

export default ValueSelect;
