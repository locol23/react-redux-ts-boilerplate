// Action
const INCREMENT = 'counter/increment'
const DECREMENT = 'counter/decrement'
const MULTIPLY = 'counter/multiply'
const RESET = 'counter/reset'

// Types
interface Increment {
  type: typeof INCREMENT
}

interface Decrement {
  type: typeof DECREMENT
}

interface Multiply {
  type: typeof MULTIPLY
  payload: {
    amount: number
  }
}

interface Reset {
  type: typeof RESET
}

type Action = Increment | Decrement | Multiply | Reset

// Action Creator
export const increment = (): Increment => ({ type: INCREMENT })

export const decrement = (): Decrement => ({ type: DECREMENT })

export const multiply = (amount: number): Multiply => ({
  type: MULTIPLY,
  payload: {
    amount,
  },
})

export const reset = (): Reset => ({ type: RESET })

// State
export interface State {
  value: number
}

const initialState: State = {
  value: 0,
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        value: state.value + 1,
      }
    }
    case DECREMENT: {
      return {
        ...state,
        value: state.value - 1,
      }
    }
    case MULTIPLY: {
      return {
        ...state,
        value: state.value * action.payload.amount,
      }
    }
    case RESET: {
      return {
        ...initialState,
      }
    }
    default: {
      return state
    }
  }
}
