// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, decrement } from './redux/slices/counter/counter';
import { useAppDispatch, useAppSelector } from './redux/hooks/hook'
import MyComp from './MyComponent/MyComp';

function App() {
  // const [count, setCount] = useState(0)
  const count = useAppSelector((state) => (state.counter));
  const dispatch = useAppDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>{" "}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <MyComp/>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App
