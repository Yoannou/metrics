import ValueSelect from './ValueSelect'
import MetricSelect from './MetricSelect'
import './InputArea.css'

function InputArea() {
  return (
    <div className="input-area">
        <ValueSelect />
        <MetricSelect />
    </div>
  );
}

export default InputArea;
