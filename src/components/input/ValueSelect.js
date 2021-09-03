import './ValueSelect.css'

function ValueSelect() {
  return (
    <div className="select value-select">
      <form className="form value-form">
        <label class="value-label">
          <input type="text" name="value" />
        </label>
      </form>
    </div>
  );
}

export default ValueSelect;
