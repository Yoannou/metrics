import React, { useState, useEffect } from 'react'
import Notes from './Notes'
import Info from './Info'
import InputArea from './input/InputArea'
import OutputArea from './output/OutputArea'
import Menu from './Menu'

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

  // Info for description of units
  const [info, setInfo] = useState('closed');
  const handleInfoChange = (event) => {
    if (info === 'open') {
      setInfo('closed');
    }
    else {
      setInfo('open');
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

  // Ingredient densities in g/cm3 or g/mL
  const densityChart = {
    water: 1,
    milk: 1.03,
    flower: 0.6,
    salt: 1.217,
    sugar: 0.845,
    honey: 1.42,
    butter: 0.959,
    oil: 0.9
  };

  // Ingredient density for volume-weight conversion
  const [density, setDensity] = useState({
    ingredient: "water",
    density: 1
  });
  const handleDensityChange = (event) => {
    setDensity({
      ingredient: event.target.value,
      density: densityChart[event.target.value]
    })
  }

  const byDensity = (n) => {
    return n * density.density;
  }

  // Each object in array represents an output node
  // Each formula represents the current user input unit, and method of converting to output node
  const [conversionsVolume, setConversionsVolume] = useState([
    {
      unit: 'ml',
      name: 'ml',
      value: 100,
      color: '#89CFF0',
      glab: 1,
      formulas: {
        ml(n){return n},
        L(n){return n*1000},
        floz(n){return (n*29.573)},
        tsp(n){return (n*5)},
        tbsp(n){return (n*15)},
        cups(n){return (n*250)},
        pt(n){return (n*473)},
        qt(n){return (n*946)},
        gal(n){return (n*3784)},
        // Cannot get these last 4 to work, they cannot be refreshed
        // with the newest density value...
        g(n){return byDensity(n)},
        kg(n){return n*1000},
        oz(n){return n*28.35},
        lbs(n){return (n*453.592)}
      }
    },
    {
      unit: 'L',
      name: 'L',
      value: 0.1,
      color: "#7CB9E8",
      formulas: {
        ml(n){return n*0.001},
        L(n){return n},
        floz(n){return (n*0.029573)},
        tsp(n){return (n*0.005)},
        tbsp(n){return (n*0.015)},
        cups(n){return (n*0.250)},
        pt(n){return (n*0.473)},
        qt(n){return (n*0.946)},
        gal(n){return (n*3.784)},
        g(n){return n},
        kg(n){return n},
        oz(n){return n},
        lbs(n){return (n)}
      }
    },
    {
      unit: 'floz',
      name: 'fl. oz',
      value: 3.5274,
      color: "#318CE7",
      formulas: {
        ml(n){return (n / 29.574)},
        L(n){return (n * 33.814)},
        floz(n){return (n)},
        tsp(n){return (n / 5.914)},
        tbsp(n){return (n / 1.971)},
        cups(n){return (n * 8.453)},
        pt(n){return (n * 16)},
        qt(n){return (n * 32)},
        gal(n){return (n * 127.954)},
        g(n){return (n)},
        kg(n){return (n)},
        oz(n){return (n)},
        lbs(n){return (n)}
      }
    },
    {
      unit: 'tsp',
      name: 'tsp',
      value: 3.5274,
      color: "#ddd",
      formulas: {
        ml(n){return (n / 5)},
        L(n){return (n*200)},
        floz(n){return (n * 5.914)},
        tsp(n){return (n)},
        tbsp(n){return (n * 3)},
        cups(n){return (n * 50)},
        pt(n){return (n * 94.6)},
        qt(n){return (n * 189.2)},
        gal(n){return (n * 756.8)},
        g(n){return (n)},
        kg(n){return (n)},
        oz(n){return (n)},
        lbs(n){return (n)}
      }
    },
    {
      unit: 'tbsp',
      name: 'tbsp',
      value: 3.5274,
      color: "#ccc",
      formulas: {
        ml(n){return (n / 15)},
        L(n){return (n * 66.666)},
        floz(n){return (n * 1.971)},
        tsp(n){return (n / 3)},
        tbsp(n){return (n)},
        cups(n){return (n * 16.666)},
        pt(n){return (n * 31.533)},
        qt(n){return (n * 63.066)},
        gal(n){return (n * 252.266)},
        g(n){return (n)},
        kg(n){return (n)},
        oz(n){return (n)},
        lbs(n){return (n)}
      }
    },
    {
      unit: 'cups',
      name: 'cups',
      value: 3.5274,
      color: "#bbb",
      formulas: {
        ml(n){return (n / 250)},
        L(n){return (n * 4)},
        floz(n){return (n / 8.453)},
        tsp(n){return (n / 50)},
        tbsp(n){return (n / 16.666)},
        cups(n){return (n)},
        pt(n){return (n * 1.892)},
        qt(n){return (n * 3.784)},
        gal(n){return (n * 15.136)},
        g(n){return (n)},
        kg(n){return (n)},
        oz(n){return (n)},
        lbs(n){return (n)}
      }
    },
    {
      unit: 'pt',
      name: 'pt',
      value: 3.5274,
      color: "#8F9779",
      formulas: {
        ml(n){return (n / 473)},
        L(n){return (n * 2.113)},
        floz(n){return (n / 16)},
        tsp(n){return (n / 94.6)},
        tbsp(n){return (n / 31.533)},
        cups(n){return (n / 1.892)},
        pt(n){return (n)},
        qt(n){return (n * 2)},
        gal(n){return (n * 8)},
        g(n){return (n)},
        kg(n){return (n)},
        oz(n){return (n)},
        lbs(n){return (n)}
      }
    },
    {
      unit: 'qt',
      name: 'qt',
      value: 3.5274,
      color: "#87A96B",
      formulas: {
        ml(n){return (n / 946)},
        L(n){return (n * 1.056)},
        floz(n){return (n / 32)},
        tsp(n){return (n / 1.892)},
        tbsp(n){return (n / 63.066)},
        cups(n){return (n / 3.784)},
        pt(n){return (n / 2)},
        qt(n){return (n)},
        gal(n){return (n * 4)},
        g(n){return (n)},
        kg(n){return (n)},
        oz(n){return (n)},
        lbs(n){return (n)}
      }
    },
    {
      unit: 'gal',
      name: 'gal',
      value: 3.5274,
      color: "#17B169",
      formulas: {
        ml(n){return (n / 3784)},
        L(n){return (n / 3.784)},
        floz(n){return (n / 128)},
        tsp(n){return (n / 756.8)},
        tbsp(n){return (n / 252.266)},
        cups(n){return (n / 15.136)},
        pt(n){return (n / 8)},
        qt(n){return (n / 4)},
        gal(n){return (n)},
        g(n){return (n)},
        kg(n){return (n)},
        oz(n){return (n)},
        lbs(n){return (n)}
      }
    },
  ]);


  /* For weight we will convert to grams */
  const [conversionsWeight, setConversionsWeight] = useState([
    {
      unit: 'g',
      name: 'g',
      value: 100,
      color: '#f34a53',
      formulas: {
        ml(n){return (n)},
        L(n){return (n)},
        floz(n){return (n)},
        tsp(n){return (n)},
        tbsp(n){return (n)},
        cups(n){return (n)},
        pt(n){return (n)},
        qt(n){return (n)},
        gal(n){return (n)},
        g(n){return (n)},
        kg(n){return (n)},
        oz(n){return (n)},
        lbs(n){return (n)}
      }
    },
    {
      unit: 'kg',
      name: 'kg',
      value: 0.1,
      color: "#f34a53",
      formulas: {
        ml(n){return (n)},
        L(n){return (n)},
        floz(n){return (n)},
        tsp(n){return (n)},
        tbsp(n){return (n)},
        cups(n){return (n)},
        pt(n){return (n)},
        qt(n){return (n)},
        gal(n){return (n)},
        g(n){return (n)},
        kg(n){return (n)},
        oz(n){return (n)},
        lbs(n){return (n)}
      }
    },
    {
      unit: 'oz',
      name: 'oz',
      value: 0.1,
      color: "#f34a53",
      formulas: {
        ml(n){return (n)},
        L(n){return (n)},
        floz(n){return (n)},
        tsp(n){return (n)},
        tbsp(n){return (n)},
        cups(n){return (n)},
        pt(n){return (n)},
        qt(n){return (n)},
        gal(n){return (n)},
        g(n){return (n)},
        kg(n){return (n)},
        oz(n){return (n)},
        lbs(n){return (n)}
      }
    },
    {
      unit: 'lbs',
      name: 'lbs',
      value: 0.2205,
      color: "#f34a53",
      formulas: {
        ml(n){return (n)},
        L(n){return (n)},
        floz(n){return (n)},
        tsp(n){return (n)},
        tbsp(n){return (n)},
        cups(n){return (n)},
        pt(n){return (n)},
        qt(n){return (n)},
        gal(n){return (n)},
        g(n){return (n)},
        kg(n){return (n)},
        oz(n){return (n)},
        lbs(n){return (n)}
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
    setConversionsVolume( prevConversions => (
      conversionsVolume.map(obj => {
        const temp = Object.assign({}, obj); // Create temporary object out of object
        const formula = temp.formulas[unit]; // Get the formula for new unit that just changed value
        temp.value = formula(value.number); // Apply this formula to current value for this unit
        if (countDecimals(temp.value) > 2 && typeof temp.value == "number") {
          temp.value = temp.value.toFixed(2); // Bring it to 2 decimals
        }
        return temp;
      })
    ));
    console.log(density.ingredient);
    console.log(density.density);
    console.log(conversionsVolume);
  }

  // update runs as a side-effect whenever user changes state of value or unit.
  useEffect(update, [value, unit, density]);

  return (
    <div className="container">
        <Notes openStatus={notepad} notepadChange={handleNotepadChange}/>
        <Info openStatus={info} infoChange={handleInfoChange}/>
        <Menu notepadChange={handleNotepadChange} infoChange={handleInfoChange}/>
        <InputArea value={value} valueChange={handleValueChange}
          unit={unit} unitChange={handleUnitChange}
          density={density} densityChange={handleDensityChange} />
        <OutputArea currentUnit={unit} conversions={[conversionsVolume, conversionsWeight]} />
    </div>
  );
}

export default View;
