

import { useState } from 'react';

const KeyboardClipboard = () => {

  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    e.target.value = e.target.value.toUpperCase();
    e.keyCode === 13 && alert('Entera basildi');

  };

  const handleAreaPaste = (e)=> {

    e.target.value += e.clipboardData.getData('text').value.toLowerCase();
    e.preventDefault();
    
  };

  return (

    <div className="container text-center">

      <h2>CLIPBOARD EVENTS </h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}

      />

      <p className="text-start m-4">{inputValue}</p>

      <textarea 
      name='area' 
      id='area' 
      cols="50"  
      rows="10" 
      onPaste={handleAreaPaste} 

      ></textarea>

    </div>
  );
};

export default KeyboardClipboard;