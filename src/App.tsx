import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counterSlice';
import { RootState } from './redux/store';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input
        type="text"
        value={incrementAmount}
        onChange={(evt) => setIncrementAmount(evt.target.value)}
      />
      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>追加</button>
    </div>
  );
}

export default App;
