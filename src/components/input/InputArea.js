import ValueSelect from './ValueSelect'
import UnitSelect from './UnitSelect'
import SystemSelect from './SystemSelect'
import './InputArea.css'

function InputArea({value, valueChange, unit, unitChange, system, systemChange}) {
  return (
    <div className="input-area">
        <ValueSelect value={value.number} onChange={valueChange}/>
        <UnitSelect unit={unit} onChange={unitChange} system={system}/>
        <SystemSelect system={system} onChange={systemChange} />
    </div>
  );
}

export default InputArea;
