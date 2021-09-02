import ConversionList from './ConversionList'
import './OutputArea.css'

function OutputArea() {
  return (
    <div className="output-area">
        <ConversionList densityRequired="false" />
        <ConversionList densityRequired="true" />
    </div>
  );
}

export default OutputArea;