import ConversionList from './ConversionList'
import './OutputArea.css'

function OutputArea({currentUnit, conversions}) {
  return (
    <div className="output-area">
        <ConversionList id="results-main" currentUnit={currentUnit} nodes={conversions} densityRequired="false" />
        {/* <ConversionList id="results-secondary" densityRequired="true" /> */}
    </div>
  );
}

export default OutputArea;