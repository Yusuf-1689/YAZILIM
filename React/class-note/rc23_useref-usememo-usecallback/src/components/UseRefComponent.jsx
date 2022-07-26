import React, { useEffect, useRef } from 'react';

const UseRefComponent = () => {
    //* useRef birinci kullanım
    //* DOM elementlerine ulaşmamızı sağlar

    const inputRef = useRef(null);
    const divRef = useRef();

    useEffect(() => {
    //   console.log(document.querySelector('input'));
    //   document.querySelector('input').focus();
    // console.log(inputRef.current);
    // inputRef.current.focus();
    
    
    }, []);

    const ChangeBGColor = () => {
        divRef.current.style.backgroundColor='orange';
        const colors = [
            'orange',
            'pink',
            'purple',
            'red',
            '#00FF00',
            'rgb(150, 150, 150)',
          ];
          const random = Math.trunc(Math.random() * colors.length)
          console.log(random);
          divRef.current.style.backgroundColor= colors[random];
    };
    
  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input ref={inputRef} type="text" placeholder="Enter text..." />
      <button onClick={ChangeBGColor}>ChangeBGColor</button>
    </div>
  );
};

export default UseRefComponent;