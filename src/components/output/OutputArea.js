import ConversionList from './ConversionList'
import './OutputArea.css'

function OutputArea({currentMetric, conversions}) {
  return (
    <div className="output-area">
        <ConversionList id="results-main" currentMetric={currentMetric} nodes={conversions} densityRequired="false" />
        {/* <ConversionList id="results-secondary" densityRequired="true" /> */}
    </div>
  );
}

export default OutputArea;