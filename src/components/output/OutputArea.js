import ConversionList from './ConversionList'
import './OutputArea.css'

function OutputArea({currentUnit, conversions}) {
  return (
    <div className="output-area">
        <ConversionList id="results-volume" currentUnit={currentUnit} nodes={conversions[0]} densityRequired="false" />
        {/* <ConversionList id="results-weight" currentUnit={currentUnit} nodes={conversions[1]} densityRequired="true" /> */}
    </div>
  );
}

export default OutputArea;
