import './MetricSelect.css'

function MetricSelect({metric, onChange}) {
  return (
    <div className="select metric-select">
      <form className="form metric-form">
        <label className="metric-label">
          <select name="metric" onChange={onChange}>
            <option className="drop-down-option" value="g">g</option>
            <option className="drop-down-option" value="ml">ml</option>
            <option className="drop-down-option" value="L">L</option>
            <option className="drop-down-option" value="kg">kg</option>
            <option className="drop-down-option" value="oz">oz</option>
            <option className="drop-down-option" value="lbs">lbs</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default MetricSelect;