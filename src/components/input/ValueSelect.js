import './ValueSelect.css'

// Can add after type:
//  pattern="[0-9]*"

function ValueSelect({value, onChange}) {
  return (
    <div className="select value-select">
      <form className="form value-form">
        <label className="value-label">
          <input inputMode="numeric" 
            type="text" name="value"
            value={value} onChange={onChange}
            maxLength="7"
            /*style={{width: value.length + "ch"}}*//>
        </label>
      </form>
    </div>
  );
}

export default ValueSelect;
