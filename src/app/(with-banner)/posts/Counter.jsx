'use client'

import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        increase
      </button>
    </div>
  )
}

export default Counter
