import './ConversionNode.css'

function commafy( num ) {
  var str = num.toString().split('.');
  if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }
  return str.join('.');
}

function ConversionNode({currentUnit, node}) {

  let bgcolor = node.color;

  if (node.unit == currentUnit) {
    bgcolor="gold";
  }

  return (
    <div style={{backgroundColor: bgcolor}} className="conversion-node">
      <div className="node-text node-value"><h2>{(node.value < 100000000) ? commafy(node.value) : ">100,000,000"} </h2></div>
      <div className="node-text node-unit"><h2>{node.name}</h2></div>
    </div>
  );
}

export default ConversionNode;
