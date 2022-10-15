/* OLD CONVERSIONS (FOR SECURITY)
const [conversionsOld, setConversionsOld] = useState([
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
    unit: 'ml',
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
    unit: 'L',
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
    unit: 'kg',
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
    unit: 'lbs',
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
    unit: 'oz',
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
      oz(n){return (n*5.6699)}
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
      oz(n){return n*1.8899}
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
      oz(n){return n} // IN PROGRESS
    }
  }
]);
*/

/* IMPERIAL SYSTEM (US) selected:
const [conversionsImperial, setConversionsImperial] = useState([
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
    unit: 'ml',
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
    unit: 'L',
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
    unit: 'kg',
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
    unit: 'lbs',
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
    unit: 'floz',
    value: 0,
    color: "#ea4495",
    formulas: {
      g(n){return 0},
      ml(n){return 0},
      L(n){return 0},
      kg(n){return 0},
      lbs(n){return 0},
      oz(n){return 0}
    }
  },
  {
    unit: 'quarts',
    value: 0,
    color: "#ea4495",
    formulas: {
      g(n){return 0},
      ml(n){return 0},
      L(n){return 0},
      kg(n){return 0},
      lbs(n){return 0},
      oz(n){return 0}
    }
  }
]);
*/
