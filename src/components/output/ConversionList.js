import ConversionNode from './ConversionNode'
import './ConversionList.css'

function ConversionList({currentMetric, nodes, densityRequired}) {
  return (
    <div className="conversion-list">
      {nodes.map(node => ((node.metric !== currentMetric) && <ConversionNode key={node.metric} node={node}/>))}
    </div>
  );
}

export default ConversionList;