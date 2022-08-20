import React, { useState, useEffect } from 'react'
import Notes from './Notes'
import InputArea from './input/InputArea'
import OutputArea from './output/OutputArea'
import './View.css'

function View() {

  // Declaring these here causes issues because they get re-assigned to defaults on re-render
  // But just using the state versions (value and metric) causes issue because they are behind the render
  // I end up using these and state versions together, should be better way.
  // I update these values with every setState, based on what they already are if I have to,
  // so that they don't go back to this.

  // CONSIDER useRef() for these. Similar to state but doesn't cause a re-render,
  // and it won't change every time this file is run.

  // No, useEffect is the way to do it.
  // let newValue = 100;
  // let newMetric = 'g';

  const [notepad, setNotepad] = useState('closed');
  const handleNotepadChange = (event) => {
    if (notepad === 'open') {
      setNotepad('closed');
    }
    else {
      setNotepad('open');
    }
  }

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

  const [metric, setMetric] = useState('g');
  const handleMetricChange = (event) => {
    setMetric(event.target.value);
  }

  const [conversions, setConversions] = useState([
    {
      metric: 'g',
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
      metric: 'ml',
      value: 100,
      color: '#7a9fed',
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
      metric: 'L',
      value: 0.1,
      color: "#65cc55",
      formulas: {
        g(n){return n/1000},
        ml(n){return n/1000},
        L(n){return n},
        kg(n){return n},
        lbs(n){return (n/2.205)},
        oz(n){return (n/35.274)}
      }
    },
    {
      metric: 'kg',
      value: 0.1,
      color: "#eeaa33",
      formulas: {
        g(n){return n/1000},
        ml(n){return n/1000},
        L(n){return n},
        kg(n){return n},
        lbs(n){return (n/2.205)},
        oz(n){return (n/35.274)}
      }
    },
    {
      metric: 'lbs',
      value: 0.2205,
      color: "#f34a53",
      formulas: {
        g(n){return n/453.592},
        ml(n){return n/453.592},
        L(n){return n*2.205},
        kg(n){return n*2.205},
        lbs(n){return n},
        oz(n){return (n/16)}
      }
    },
    {
      metric: 'oz',
      value: 3.5274,
      color: "#ea4495",
      formulas: {
        g(n){return n/28.3495},
        ml(n){return n/28.3495},
        L(n){return n*35.274},
        kg(n){return n*35.274},
        lbs(n){return (n*16)},
        oz(n){return n}
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

  // This update to the DOM runs as a side-effect whenever user input changes
  // the state of the value or metric.
  const update = (change) => {
    setConversions( prevConversions => (
      conversions.map(obj => {
        const temp = Object.assign({}, obj);
        const formula = temp.formulas[metric];
        temp.value = formula(value.number);
        if (countDecimals(temp.value) > 2 && typeof temp.value == "number") {
          temp.value = temp.value.toFixed(2);
        }
        return temp;
      })
    ));
    return 'success';
  }

  useEffect(update, [value, metric]);


  return (
    <div className="container">
        <Notes openStatus={notepad} notepadChange={handleNotepadChange}/>
        <InputArea value={value} valueChange={handleValueChange}
          metric={metric} metricChange={handleMetricChange}/>
        <OutputArea currentMetric={metric} conversions={conversions}/>
    </div>
  );
}

export default View;