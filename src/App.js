import React from 'react';
import './App.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hi! I'm<br />
          <span className="highlight">James</span>
        </h1>
        <p className="subtitle">Servant of God, slave to C++</p>
        <div className="social-links">
          <a href="https://github.com/lim-james" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/jamesl.im/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/james-lim-557bb0153/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

