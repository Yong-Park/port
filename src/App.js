import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './HomePage';

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('ENCRYPTING');
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      // Simulando el progreso de carga
      if (loadingProgress < 100) {
        setLoadingProgress(loadingProgress + 1);

      } else {
        // Detener la simulación después de llegar al 100%
        clearInterval(interval);
        // setLoadingText('Welcome');
        setShowWelcomeMessage(true);

        // Ocultar el mensaje de bienvenida después de 3 segundos
        setTimeout(() => {
          setShowWelcomeMessage(false);
          setShowHomePage(true);
        }, 3000);
      }
    }, 50);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [loadingProgress]);

  return (
    <div className="App">
      <header className="App-header">
        {loadingProgress < 100 ? (
          <>
            <p className="Loading-text-large">
              {loadingText}
            </p>
            <div className="App-loading-bar">
              <div
                className="App-progress"
                style={{
                  width: `${loadingProgress}%`,
                  backgroundColor: '#4CAF50', // Establecer el color verde directamente
                }}
              ></div>
            </div>
          </>
        ) : showWelcomeMessage ? (
          <div className="Welcome-message fade-out">
            <p>Welcome</p>
          </div>
        ) : showHomePage ? (
          <HomePage /> // Renderizar la página de inicio
        ) : null}

      </header>
    </div>
  );  
}

export default App;
