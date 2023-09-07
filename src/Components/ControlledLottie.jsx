import { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../lotties/background1.json';

function ControlledLottie() {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const buttonStyle = "inline-block m-2 px-4 py-2 border border-white rounded bg-blue-500 text-white text-sm";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="controlled">
      <h1 className="text-2xl font-bold">Controlled Lottie</h1>
      <p className="text-gray-600 mb-4">Uses state manipulation to start, stop, and pause animations</p>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
      />
      <button
        className={buttonStyle}
        onClick={() => setIsStopped(true)}
      >
        Stop
      </button>
      <button
        className={buttonStyle}
        onClick={() => {
          setIsStopped(false);
          setIsPaused(false);
        }}
      >
        Play
      </button>
      <button
        className={buttonStyle}
        onClick={() => setIsPaused(!isPaused)}
      >
        Pause
      </button>
    </div>
  );
}

export default ControlledLottie;
