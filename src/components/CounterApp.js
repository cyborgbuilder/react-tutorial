import React, { useState } from 'react'

function CounterApp() {
    const [count, setCount] = useState(0);

    const increment = () => {
        //count += 1;

        setCount(count + 1);
    }

    const decrement = () => {
        // count -= 1;

        setCount( count - 1);
    }
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={increment} style={{padding: '6px', margin: '5px'}}>+</button>
      <button onClick={decrement} style={{padding: '6px', margin: '5px'}}>-</button>
    </div>
  )
}

export default CounterApp
