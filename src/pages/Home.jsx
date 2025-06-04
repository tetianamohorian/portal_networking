import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="hero">
      <h1>Portál pre študentov odboru Počítačové siete</h1>
      <p>
        Sme tím študentov, ktorí chcú pomáhať ostatným zdieľaním poznámok, úloh a študijných materiálov.
      </p>

      <div className="card-grid">
        <Link to="/works" className="card">
          <div className="card-icon-wrapper">
            <FontAwesomeIcon icon={faBook} className="card-icon-fa" />
          </div>
          <h3>Skladané práce</h3>
          <p>Stiahnite si archivované materiály podľa kurzu a predmetu.</p>
        </Link>

        <Link to="/bot" className="card">
          <div className="card-icon-wrapper">
            <FontAwesomeIcon icon={faTelegram} className="card-icon-fa" />
          </div>
          <h3>Telegram bot</h3>
          <p>Vstavané pokyny na používanie nášho bota.</p>
        </Link>

        <Link to="/bot" className="card">
          <div className="card-icon-wrapper">
            <FontAwesomeIcon icon={faRightToBracket} className="card-icon-fa" />
          </div>
          <h3>Prihlásenie</h3>
          <p>Prihláste sa cez účet na Telegrame a sledujte požiadavky.</p>
        </Link>
      </div>
    </div>
  );
}
