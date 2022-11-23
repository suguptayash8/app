import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './reducers/SubmitResarchReducer'

export function Counter() {
  
  const count = useSelector((state) => state.vedicResearch)

  useEffect(() =>{
    console.log("count in useEffect is " + count);
  })  

  const dispatch = useDispatch()
  console.log("print "+ count);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}