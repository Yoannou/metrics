import React, { useState, useEffect } from 'react'
import Notes from './Notes'
import InputArea from './input/InputArea'
import OutputArea from './output/OutputArea'
import './View.css'

function View() {

  // Notepad for user notes
  const [notepad, setNotepad] = useState('closed');
  const handleNotepadChange = (event) => {
    if (notepad === 'open') {
      setNotepad('closed');
    }
    else {
      setNotepad('open');
    }
  }

  // Current number value selected by user
  const [value, setValue] = useState({
    number: 100,
    length: 3
  });
  const handleValueChange = (event) => {
    if (!isNaN(event.target.value)) {
      setValue({
        number: event.target.value,
        length: event.target.textLength});
    }
  }

  // Current unit unit selected by user
  const [unit, setUnit] = useState('ml');
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  }

  // Current system / region selected by user
  const [system, setSystem] = useState('metric');
  const handleSystemChange = (event) => {
    setSystem(event.target.value);
    setUnit('g');
  }

  // Below conversions to render output in OutputArea -> ConversionList
  // Converts each output unit based on current selected unit and value using corresponding formula
  // These should be imported from another module, possibly JSON

  const [conversions, setConversions] = useState([
    {
      unit: 'ml',
      value: 100,
      color: '#7a9fed',
      formulas: {
        g(n){return n},
        ml(n){return n},
        L(n){return n*1000},
        kg(n){return n*1000},
        lbs(n){return (n*453.592)},
        floz(n){return (n*28.35)}
      }
    },
    {
      unit: 'L',
      value: 0.1,
      color: "#65cc55",
      formulas: {
        g(n){return n/1000},
        ml(n){return n/1000},
        L(n){return n},
        kg(n){return n},
        lbs(n){return (n/2.205)},
        floz(n){return (n/35.274)}
      }
    },
    {
      unit: 'fluid oz',
      value: 3.5274,
      color: "#ea4495",
      formulas: {
        g(n){return n/28.3495},
        ml(n){return n/28.3495},
        L(n){return n*35.274},
        kg(n){return n*35.274},
        lbs(n){return (n*16)},
        floz(n){return n}
      }
    },
    {
      unit: 'tsp',
      value: 3.5274,
      color: "#ccc",
      formulas: {
        g(n){return n/5},
        ml(n){return n/5},
        L(n){return n*200},
        kg(n){return n*200},
        lbs(n){return (n*90.718)},
        floz(n){return (n*5.6699)}
      }
    },
    {
      unit: 'tbsp',
      value: 3.5274,
      color: "#ccc",
      formulas: {
        g(n){return n/15},
        ml(n){return n/15},
        L(n){return n*66.67},
        kg(n){return n*66.67},
        lbs(n){return (n*30.239)},
        floz(n){return n*1.8899}
      }
    },
    {
      unit: 'cups',
      value: 3.5274,
      color: "#ccc",
      formulas: {
        g(n){return n/250},
        ml(n){return n/250},
        L(n){return n*4},
        kg(n){return n*4},
        lbs(n){return (n*1.814)},
        floz(n){return n} // IN PROGRESS
      }
    },
    {
      unit: 'g',
      value: 100,
      color: '#7a7a88',
      formulas: {
        g(n){return n},
        ml(n){return n},
        L(n){return n*1000},
        kg(n){return n*1000},
        lbs(n){return (n*453.592)},
        oz(n){return (n*28.35)}
      }
    },
    {
      unit: 'kg',
      value: 0.1,
      color: "#eeaa33",
      formulas: {
        g(n){return n/1000},
        ml(n){return n/1000},
        L(n){return n},
        kg(n){return n},
        lbs(n){return (n/2.205)},
        floz(n){return (n/35.274)}
      }
    },
    {
      unit: 'oz',
      value: 0.1,
      color: "#f34a53",
      formulas: {
        g(n){return n/1000},
        ml(n){return n/1000},
        L(n){return n},
        kg(n){return n},
        lbs(n){return (n/2.205)},
        floz(n){return (n/35.274)}
      }
    },
    {
      unit: 'lbs',
      value: 0.2205,
      color: "#f34a53",
      formulas: {
        g(n){return n/453.592},
        ml(n){return n/453.592},
        L(n){return n*2.205},
        kg(n){return n*2.205},
        lbs(n){return n},
        floz(n){return (n/16)}
      }
    }
  ]);

  // Should change this so that grams and millileters don't use decimals:
  const countDecimals = num => {
    const numStr = String(num);
    if (numStr.includes('.')) {
       return numStr.split('.')[1].length;
    };
    return 0;
 }

  // Updates the output value of each node based on formula relative to current value and unit
  const update = () => {
    setConversions( prevConversions => (
      conversions.map(obj => {
        const temp = Object.assign({}, obj); // Create temporary object out of object
        const formula = temp.formulas[unit]; // Get the formula for new unit that just changed value
        temp.value = formula(value.number); // Apply this formula to current value for this unit
        if (countDecimals(temp.value) > 2 && typeof temp.value == "number") {
          temp.value = temp.value.toFixed(2); // Bring it to 2 decimals
        }
        return temp;
      })
    ));
  }

  // update runs as a side-effect whenever user changes state of value or unit.
  useEffect(update, [value, unit]);

  return (
    <div className="container">
        {/* <Notes openStatus={notepad} notepadChange={handleNotepadChange}/> */}
        <InputArea value={value} valueChange={handleValueChange}
          unit={unit} unitChange={handleUnitChange} />
        <OutputArea currentUnit={unit} conversions={conversions} />
    </div>
  );
}

export default View;
