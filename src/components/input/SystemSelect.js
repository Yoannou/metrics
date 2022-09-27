import './SystemSelect.css'

function SystemSelect({system, onChange}) {
  return (
    <div className="select system-select">
      <form className="form system-form">
        <label className="system-label">
          <select name="system" onChange={onChange}>
            <option className="drop-down-option" value="metric">metric (standard)</option>
            <option className="drop-down-option" value="imperial">imperial (US)</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default SystemSelect;