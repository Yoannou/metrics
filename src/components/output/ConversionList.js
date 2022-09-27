import ConversionNode from './ConversionNode'
import './ConversionList.css'

function ConversionList({currentUnit, nodes, densityRequired}) {
  return (
    <div className="conversion-list">
      {nodes.map(node => ((node.unit !== currentUnit) && <ConversionNode key={node.unit} node={node}/>))}
    </div>
  );
}

export default ConversionList;