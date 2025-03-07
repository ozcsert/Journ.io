import  { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Background = (id) => {


//  const particlesLoaded = useCallback(async (container) => {
//    await console.log(container);
//  }, []);

    const options = useMemo(() => {
        return {
        background: {
          color: {
            value: "#febe7e",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: false,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 800,
            },
            value: 0,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: false,
        }
    }, []);


    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
      }, []);


  return (
    <Particles 
       id= {id} init={particlesInit} options={options}
    />
  );
};

export default Background;
