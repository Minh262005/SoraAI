import React from 'react';
import './GetStarted.css';

const GetStarted: React.FC = () => {
  return (
    <section className="get-started">
      <h1>Get started with Sora today</h1>
      <div className="button-group">
        <button className="primary-button">
          Start now <span className="arrow">↗</span>
        </button>
        <button className="secondary-button">
          View tutorials <span className="arrow">↗</span>
        </button>
      </div>
    </section>
  );
};

export default GetStarted; 