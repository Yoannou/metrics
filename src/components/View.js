import InputArea from './input/InputArea'
import OutputArea from './output/OutputArea'
import './View.css'

function View() {
  return (
    <div className="container">
        <InputArea />
        <OutputArea />
    </div>
  );
}

export default View;