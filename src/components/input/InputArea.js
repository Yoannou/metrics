import ValueSelect from './ValueSelect'
import MetricSelect from './MetricSelect'
import './InputArea.css'

function InputArea({value, valueChange, metric, metricChange}) {
  return (
    <div className="input-area">
        <ValueSelect value={value.number} onChange={valueChange}/>
        <MetricSelect metric={metric} onChange={metricChange} />
    </div>
  );
}

export default InputArea;
