import React, { useEffect, useState } from 'react';
import './loadingscreen.css';
import logo from '../../assets/untired_2.PNG'; 

function LoadingScreen({ timetoload }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = new Date().getTime();
    const endTime = startTime + timetoload;

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsed = currentTime - startTime;
      const remaining = endTime - currentTime;

      setProgress(prev => {
        const nextProgress = (elapsed / timetoload) * 100;
        return nextProgress <= 100 ? nextProgress : 100;
      });

      if (elapsed >= timetoload) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [timetoload]);

  return (
    <div className="container-loading">
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <img src={logo} alt="Logo" className="logo-loading" />
    </div>
  );
}

export default LoadingScreen;