import  { useState } from 'react';




const TextInput = () => {
  const [inputValue, setInputValue] = useState('');



  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded transition-all duration-300 ease-in-out focus:border-blue-500 focus:outline-none hover:opacity-75"
        //className="p-2 border-0 text-2xl font-comic-sans outline-none"
        style={{ width: '300px' }}
      />
    </div>
  );
};

export default TextInput;