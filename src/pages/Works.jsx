// src/pages/SkladanéPrace.jsx
import '../styles/SkladanePrace.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const data = [
  // Semestr 2 1. ročník
  { rocnik: '1. ročník', predmet: 'Fyzika I', semester: 'LS', url: '/downloads/Fyzika I.zip'},
  { rocnik: '1. ročník', predmet: 'Matematika II' , semester: 'LS', url: '/downloads/Matematika II.zip'},
  { rocnik: '1. ročník', predmet: 'Princípy počítačového inžinierstva', semester: 'LS' , url: '/downloads/PPI.zip'},
  // Semestr 1 2. ročník
  { rocnik: '2. ročník', predmet: 'Architektúry počítačových systémov', semester: 'ZS' , url: '/downloads/APS.zip'},
  { rocnik: '2. ročník', predmet: 'Diskrétna matematika', semester: 'ZS' , url: '/downloads/Diskretna matika.zip'},
  { rocnik: '2. ročník', predmet: 'Údajové štruktúry a algoritmy', semester: 'ZS', url: '/downloads/USAA.zip'},
  { rocnik: '2. ročník', predmet: 'Úvod do počítačových sietí', semester: 'ZS' , url: '/downloads/UPS.zip'},
  // Semestr 2 2. ročník
  { rocnik: '2. ročník', predmet: 'Databázové systémy', semester: 'LS', url: '/downloads/Diskretna matika.zip'},
  { rocnik: '2. ročník', predmet: 'Numerická matematika, pravdepodobnosť a matematická štatistika' , semester: 'LS', url: '/downloads/Numerika.zip'},
  { rocnik: '2. ročník', predmet: 'Počítačové siete' , semester: 'LS', url: '/downloads/PS.zip'},
  { rocnik: '2. ročník', predmet: 'Multimediálne signály v komunikačných sieťach' , semester: 'LS', url: '/downloads/Multimedia.zip'},
  { rocnik: '2. ročník', predmet: 'Úvod do digitálnych komunikácií' , semester: 'LS', url: '/downloads/UDK.zip'},
  { rocnik: '2. ročník', predmet: 'Základy elektroniky a logických obvodov' , semester: 'LS', url: '/downloads/ZELO.zip'},
  // Semestr 1 3. ročník
  { rocnik: '3. ročník', predmet: 'Aplikácie počítačových sietí' , semester: 'ZS', url: '/downloads/APCS.zip'},
  { rocnik: '3. ročník', predmet: 'Mobilné technológie a služby ' , semester: 'ZS', url: '/downloads/MTS.zip'},
  { rocnik: '3. ročník', predmet: 'Objektovo orientované programovanie' , semester: 'ZS' , url: '/downloads/OOP.zip'},
  { rocnik: '3. ročník', predmet: 'Programovanie meracích systémov' , semester: 'ZS', url: '/downloads/PMS.zip'},
  { rocnik: '3. ročník', predmet: 'Webové technológie' , semester: 'ZS', url: '/downloads/WT.zip'},
  

  // Semestr 2 3. ročník
  { rocnik: '3. ročník', predmet: 'Bezpečnosť v počítačových systémoch' , semester: 'LS', url: '/downloads/BPS.zip'},
  { rocnik: '3. ročník', predmet: 'Optoelektronika' , semester: 'LS', url: '/downloads/Optoelektronika.zip'},
  { rocnik: '3. ročník', predmet: 'Spoločenské vedy a technika' , semester: 'LS', url: '/downloads/SVT.zip'},
  { rocnik: '3. ročník', predmet: 'Základy softvérového inžinierstva' , semester: 'LS', url: '/downloads/ZSI.zip'}


];

export default function SkladanéPrace() {
  const [selectedRocnik, setSelectedRocnik] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  const rocniky = [...new Set(data.map(item => item.rocnik))];
  const semesterOptions = ['ZS', 'LS'];

  const filtered = data.filter(item =>
    (!selectedRocnik || item.rocnik === selectedRocnik) &&
    (!selectedSemester || item.semester === selectedSemester)
  );

  return (
    <div className="sp-container">
      <div className="sp-filter-row">
        <div className="sp-filter">
          <label className="sp-label">Vyberte ročník</label>
          <select className="sp-select" value={selectedRocnik} onChange={e => setSelectedRocnik(e.target.value)}>
            <option value="">-- Vyberte ročník --</option>
            {rocniky.map((rocnik, i) => (
              <option key={i} value={rocnik}>{rocnik}</option>
            ))}
          </select>
        </div>

        <div className="sp-filter">
          <label className="sp-label">Vyberte semester</label>
          <select className="sp-select" value={selectedSemester} onChange={e => setSelectedSemester(e.target.value)}>
            <option value="">-- Všetky semestre --</option>
            {semesterOptions.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="sp-card-grid">
        {filtered.map((item, i) => (
  <div
    key={i}
    className="sp-card"
    style={{ animationDelay: `${0.2 * i + 0.5}s` }}
  >
    <div className="sp-icon-column">
    <div className="sp-icon-wrapper">
      <FontAwesomeIcon icon={faFolderOpen} className="sp-icon" />
    </div>
    </div>
    <div className="sp-content">
      <h3>{item.predmet}</h3>
      <p>Archív obsahuje: zadania, riešenia, poznámky</p>
    </div>
    <a href={item.url} download className="sp-download">
       Stiahnuť archív
    </a>

  </div>
))}

      </div>
    </div>
  );
}

