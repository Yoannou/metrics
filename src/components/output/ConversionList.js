import ConversionNode from './ConversionNode'
import './ConversionList.css'

function ConversionList({currentUnit, nodes, densityRequired}) {

//      {nodes.map(node => ((node.unit !== currentUnit) && <ConversionNode key={node.unit} node={node}/>))}


  return (
    <div className="conversion-list">
      {nodes.map( node => <ConversionNode key={node.unit} currentUnit={currentUnit} node={node}/> )}
    </div>
  );
}

export default ConversionList;
