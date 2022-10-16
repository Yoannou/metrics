import React, { useState } from 'react'
import './UnitSelect.css'

function UnitSelect({unit, onChange, system}) {

  /*
  <optgroup label="weight">
    <option className="drop-down-option" value="g">g</option>
    <option className="drop-down-option" value="kg">kg</option>
    <option className="drop-down-option" value="oz">oz</option>
    <option className="drop-down-option" value="lbs">lbs</option>
  </optgroup>
  */

  return (
    <div className="select unit-select">
      <form className="form unit-form">
        <label className="unit-label">
          <select name="unit" onChange={onChange}>
            <optgroup label="volume">
              <option className="drop-down-option" value="ml">ml</option>
              <option className="drop-down-option" value="L">L</option>
              <option className="drop-down-option" value="floz">oz (fluid)</option>
              <option className="drop-down-option" value="tsp">tsp</option>
              <option className="drop-down-option" value="tbsp">tbsp</option>
              <option className="drop-down-option" value="cups">cups</option>
              <option className="drop-down-option" value="pt">pint</option>
              <option className="drop-down-option" value="qt">quart</option>
              <option className="drop-down-option" value="gal">gallon</option>
            </optgroup>
          </select>
        </label>
      </form>
    </div>
  );
}

export default UnitSelect;
