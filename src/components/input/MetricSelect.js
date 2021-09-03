import './MetricSelect.css'

function MetricSelect() {
  return (
    <div className="select metric-select">
      <form className="form metric-form">
        <label class="metric-label">
          <select name="metric">
            <option value="g">g</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default MetricSelect;
