import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="burger-icon-wrapper" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} className="burger-icon" />
        </div>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Domov</Link>
          <Link to="/works" onClick={() => setMenuOpen(false)}>Skladané práce</Link>
          <Link to="/bot" onClick={() => setMenuOpen(false)}>Telegram bot</Link>
        </nav>
      </div>
    </header>
  );
}
