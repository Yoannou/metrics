import { GiNotebook } from 'react-icons/gi'
import { BsFillInfoCircleFill } from 'react-icons/bs'

import './Menu.css'

function Menu({notepadChange, infoChange}) {
  return (
    <div className="menu">
      <div className="notes-icon-wrapper">
          <GiNotebook className="notes-icon" onClick={notepadChange} />
      </div>
      <div className="menu-divider" />
      <div className="info-icon-wrapper">
        <BsFillInfoCircleFill className="info-icon" onClick={infoChange}/>
      </div>
    </div>
  );
}

export default Menu;
