import React, { useEffect } from 'react';
import '../styles/TelegramBot.css';
import '@fortawesome/fontawesome-free/css/all.min.css';





const TelegramBot = () => {

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  };

  handleResize(); // запускаем сразу при монтировании
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
    document.body.style.overflowY = 'auto'; // восстановление
  };
}, []);

  return (
    <div className="telegram-container">
      <section className="intro-section">
        <div className="text-block">
          <h1>Telegram bot pre študentov</h1>
          <p>Bot, ktorý pomáha s nadchádzajúcimi zadaniami a skúškami.</p>
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-text">
          <h2>Ako používať bota ?</h2>
          <ol className="bot-steps">
            <li>
              <div className="circle-icon"> 
                <i className="fas fa-comment-dots"></i>
              </div>Napíšte príkaz <code>/start</code>
            </li>
            <li>
              <div className="circle-icon">
                <i className="fas fa-globe"></i>
              </div>   
              Vyberte jazyk (SK, EN, RU, UA)
            </li>
            <li>
              <div className="circle-icon">
              <i className="fas fa-user-graduate  step-icon"></i> 
              </div>
              Vyberte kurz štúdia</li>
            <li>
              <div className="circle-icon">
                <i className="fas fa-calendar-alt"></i> 
              </div>
              Vyberte aktuálny semester
            </li>
            <li>
              <div className="circle-icon">
                <i className="fas fa-book"></i>
              </div>
               Zobrazí sa zoznam predmetov</li>
            <li>
              <div className="circle-icon">
              <i className="fas fa-pen"></i>
              </div> 
              Vyberte predmet a konkrétnu prácu (napr. Skúška)</li>
            <li><div className="circle-icon"><i className="fas fa-clock"></i></div> Napíšte termín odovzdania (formát: dd.mm.rrrr hh:mm)</li>
            <li><div className="circle-icon"><i className="fas fa-file-alt"></i></div> Uveďte detaily alebo napíšte <code>-</code></li>
            <li><div className="circle-icon"><i className="fas fa-inbox"></i></div> Počkajte na prijatie požiadavky</li>
            <li><div className="circle-icon"><i className="fas fa-star"></i></div> Po dokončení môžete ohodnotiť (1 - 5)</li>
          </ol>
        </div>
      </section>
      <a href="https://t.me/PocitacoveSieteBot" className="mobile-bot-link">
      Otvoriť bota v Telegrame
      </a>


    </div>
  );
};

export default TelegramBot;
