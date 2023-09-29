

import backgroundSvg from './assets/layered-waves-background.svg';

function MyComponent() {
  return (
    <div
      className="bg-custom-svg-background bg-cover"
      style={{ backgroundImage: `url(${backgroundSvg})` }}
    >

    </div>
  );
}

export default MyComponent;