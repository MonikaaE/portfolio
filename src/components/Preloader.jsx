import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const intervalTime = 12;
    const loadingInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => {
            setFadeOut(true);
          }, 180);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <div id="preloader" className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-card">
        <span className="preloader-label">LOADING</span>
        <span id="preloader-percent" className="preloader-number">{progress}%</span>
        <div className="preloader-bar-bg">
          <div
            id="preloader-bar-fill"
            className="preloader-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
