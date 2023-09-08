import { useDispatch } from 'react-redux';
import { setJourns } from '../reducers/journReducer';


const TextInput = () => {
  //const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault()
    const content = e.target.value
    console.log(e.target.value);
    dispatch(setJourns(content));
  };

  return (
    <div className='relative flex items-center justify-center h-screen w-screen'>
      <input
        type="text"
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded transition-all duration-300 ease-in-out focus:border-blue-500 focus:outline-none hover:opacity-75"
        //className="p-2 border-0 text-2xl font-comic-sans outline-none"
        style={{ width: '300px' }}
      />
    </div>
  );
};

export default TextInput;