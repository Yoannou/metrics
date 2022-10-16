import Menu from './Menu'
import ValueSelect from './ValueSelect'
import UnitSelect from './UnitSelect'
import DensitySelect from './DensitySelect'
import './InputArea.css'

function InputArea({value, valueChange, unit, unitChange, density, densityChange}) {
  return (
    <div className="input-area-container">
    <Menu />
    <div className="input-area">
        <ValueSelect value={value.number} onChange={valueChange}/>
        <UnitSelect unit={unit} onChange={unitChange}/>
        {/* <DensitySelect density={density} onChange={densityChange}/> */}
    </div>
    </div>
  );
}

export default InputArea;
