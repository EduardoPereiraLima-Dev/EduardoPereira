import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className= 'w-full h-full absolute translate-z-0'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit:120,
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90, // Reduzir ainda mais a quantidade de partículas
            },
            repulse: {
              distance: 200, 
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#e68e2e',
          },
          link: {
            color: '#f5d393',
            distance: 150, 
            enable: true,
            opacity: 0.5, 
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1, // Reduzir a velocidade das partículas ainda mais
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800, // Aumentar a área de densidade ainda mais
            },
            value: 80, // Reduzir o número total de partículas ainda mais
          },
          opacity: {
            value: 0.5, // Reduzir a opacidade das partículas ainda mais
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
