import { useState } from 'react'
import './App.css'

export default function App() {
  console.log('App');

  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={onClickCountUp}>Increment</button>
    </div>
  )
}
