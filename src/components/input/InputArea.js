import ValueSelect from './ValueSelect'
import MetricSelect from './MetricSelect'
import './InputArea.css'

function InputArea() {
  return (
    <div className="input-area">
      <div className="value-select-wrapper">
        <ValueSelect />
      </div>
      <div className="metric-select-wrapper">
        <MetricSelect />
      </div>
    </div>
  );
}

export default InputArea;