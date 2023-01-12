import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount, incrementAsync } from '../redux/features/counter/counterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <h3> Or you can input what you want here</h3>
        <input onChange={e => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0 ))}>Increment by amount</button>
        <button onClick={() => dispatch(decrementByAmount(Number(incrementAmount) || 0 ))}>Decrement by amount</button>
        <h3>Also you can handle it into set time in 1s</h3>
        <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0 ))}>Increment by async</button>
    </div>
  )
};

export default Counter;