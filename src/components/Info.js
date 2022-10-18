import { AiOutlineCloseSquare } from 'react-icons/ai'

import './Info.css'

function Info({openStatus, infoChange}) {

  const openness = openStatus === 'open' ? 'info-open' : '';

  return (
    <div className={"info " + openness}>
      <section className="info-section info-section-1">
        <h2>Info coming soon!</h2>
      </section>
      <section className="info-section info-section-close">
        <AiOutlineCloseSquare className="info-close" onClick={infoChange}/>
      </section>
    </div>
  );
}

export default Info;
