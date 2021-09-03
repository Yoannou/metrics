import React, { useState } from 'react'
import Notes from './Notes'
import InputArea from './input/InputArea'
import OutputArea from './output/OutputArea'
import './View.css'

function View() {

  let newValue = 0;
  const [value, setValue] = useState({
    number: 100,
    length: 3
  });
  const handleValueChange = (event) => {
    newValue = event.target.value;
    const newLength = event.target.textLength;
    if (newLength < 8 && !isNaN(newValue)) {
      setValue({
        number: newValue, 
        length: newLength});
    }
    update('valueChange');
    console.log("KEYSTROKE HANDLED.")
  }

  const [metric, setMetric] = useState('g');
  const handleMetricChange = (event) => {
    setMetric(event.target.value);
    update('metricChange');
  }

  // We need to pass this down. React won't know to update
  // the nodes since they aren't passed this data
  const [conversions, setConversions] = useState([
    {
      metric: 'g',
      value: 100,
      color: '#7a7a88',
      formulas: {
        g(n){return n},
        ml(n){return n},
        L(n){return n*0.1}, 
        kg(n){return n*0.1}, 
        lbs(n){return (n*0.0022046)}, 
        oz(n){return (n*0.035274)} 
      }
    },
    {
      metric: 'ml',
      value: 100,
      color: '#7aefed',
      formulas: {
        g(n){return n},
        ml(n){return n},
        L(n){return n*0.1}, 
        kg(n){return n*0.1}, 
        lbs(n){return (n*0.0022046)}, 
        oz(n){return (n*0.035274)} 
      }
    },
    {
      metric: 'L',
      value: 0.1,
      color: "#88ddbb",
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

  const countDecimals = num => {
    const numStr = String(num);
    if (numStr.includes('.')) {
       return numStr.split('.')[1].length;
    };
    return 0;
 }
  
  // Make this async, must run before re-render
  const update = (change) => {
    console.log("UPDATING");
    if (change == 'metricChange') {
      console.log("Value: " + value.number);
      console.log("Metric: " + metric);
      // Update input value.number here
    }
    /* NOT WORKING - does not update value
    setConversions( prevConversions => ( //
      conversions.map(obj => {
        const temp = Object.assign({}, obj);
        const formula = temp.formulas[metric];
        temp.value = formula(value.number);
        if (countDecimals(temp.value) > 2) {
          temp.value = temp.value.toFixed(2);
        }
        console.log("NODE UPDATED WITH: " + temp.value);
        return temp;
      })
    ));
    */
    setConversions( prevConversions => ( //
      conversions.map(obj => {
        const temp = Object.assign({}, obj);
        const formula = temp.formulas[metric];
        temp.value = formula(newValue);
        console.log(temp.metric)
        if (countDecimals(temp.value) > 2) {
          temp.value = temp.value.toFixed(2);
        }
        console.log("NODE UPDATED WITH: " + temp.value);
        return temp;
      })
    ));
    console.log(conversions)
    return 'success';
  }

  return (
    <div className="container">
        <Notes />
        <InputArea value={value} valueChange={handleValueChange}
          metric={metric} metricChange={handleMetricChange}/>
        <OutputArea currentMetric={metric} conversions={conversions}/>
    </div>
  );
}

export default View;