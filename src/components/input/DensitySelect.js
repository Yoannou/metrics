import './DensitySelect.css'

function DensitySelect({density, onChange}) {
  return (
    <div className="select density-select">
      <form className="form density-form">
        <label className="density-label">
          <select name="density" onChange={onChange}>
            <option className="drop-down-option" value="water">water</option>
            <option className="drop-down-option" value="milk">milk</option>
            <option className="drop-down-option" value="flower">flower</option>
            <option className="drop-down-option" value="salt">salt</option>
            <option className="drop-down-option" value="sugar">sugar (brown or white)</option>
            <option className="drop-down-option" value="honey">honey</option>
            <option className="drop-down-option" value="butter">butter</option>
            <option className="drop-down-option" value="oil">olive oil (or other oil)</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default DensitySelect;
