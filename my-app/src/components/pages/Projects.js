import React from 'react';
import casino from '../../images/casino.jpeg';
import gaming from '../../images/gaming.jpeg';

export default function Projects() {
  return (
    <div className="project-container">
      <a href="https://snerowski.github.io/casino-worldwide/">
        <img src={casino} alt="Casino image" />
        <h3 className="project-title">Casino World</h3>
      </a>
      <a href="https://github.com/jeremystevens515/game-track">
        <img src={gaming} alt="Gaming" />
        <p className="project-title">Game-track</p>
      </a>
      <br></br>
      <footer className="footer">
        <a href="https://github.com/Rodd456">GitHub</a>
      </footer>
      <style>{`
        .project-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-gap: 10px;
        }
        .project-container a {
          display: block;
          position: relative;
        }
        .project-container img {
          width: 100%;
          height: auto;
        }
        .project-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          font-size: 16px;
          padding: 5px;
          margin: 0;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
        }
        .footer a {
          text-decoration: none;
          font-size: 18px;
        }
      `}</style>
    </div>
  )
}
