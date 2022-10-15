import ValueSelect from './ValueSelect'
import UnitSelect from './UnitSelect'
import SystemSelect from './SystemSelect'
import './InputArea.css'

function InputArea({value, valueChange, unit, unitChange}) {
  return (
    <div className="input-area">
        <ValueSelect value={value.number} onChange={valueChange}/>
        <UnitSelect unit={unit} onChange={unitChange}/>
    </div>
  );
}

export default InputArea;
