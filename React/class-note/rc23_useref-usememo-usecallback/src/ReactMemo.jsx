import React, { useState } from 'react'
import Header from './components/Header'

const ReactMemo = () => {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
  return (
    <div>
        
        <Header />
        <p>Count: {count}</p>
        <button onClick={increase}>Increase</button>
    </div>
  )
}

export default ReactMemo;