// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  const defaultState = {
    count: initialCount,
  }
  const countReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1}
      default:
        return state
    }
  }
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const increment = () => {
    dispatch({type: 'increment'})
  }
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
