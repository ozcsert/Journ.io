import { useSelector } from "react-redux";
import store from "./store";

const JournChest = () => {
  const journs = useSelector( state => state.journs);


  store.subscribe(() => console.log(store.getState()));
    
  if (journs === null || typeof journs === Object) {
    return (
      <div className="relative fixed">
        <p>Loading...</p>
      </div>
    );
  } else

  return (
    <div className="relative fixed">
      <p>{journs}</p>
    </div>
  );
};

export default JournChest; 