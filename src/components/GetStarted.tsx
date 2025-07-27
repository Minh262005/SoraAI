import React from 'react';
import './GetStarted.css';

const ExternalLinkIcon = () => (
  <svg
    width="11"
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: 'translate(1px, -1px)' }}
  >
    <path
      d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GetStarted: React.FC = () => {
  return (
    <section className="get-started">
      <h1>Get started with Sora today</h1>
      <div className="button-group">
        <button className="primary-button">
          Start now <ExternalLinkIcon />
        </button>
        <button className="secondary-button">
          View tutorials <ExternalLinkIcon />
        </button>
      </div>
    </section>
  );
};

export default GetStarted; 