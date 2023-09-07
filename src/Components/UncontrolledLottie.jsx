import Lottie from 'lottie-react';
import animationData from '../lotties/robotsfootbal.json';

const UncontrolledLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold mb-4">Lottie</h1>
      <p className="text-gray-600 mb-4">Base animation free from external manipulation</p>
      <div className="w-48 h-48 mx-auto">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default UncontrolledLottie;