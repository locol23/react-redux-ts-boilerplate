// Action
const INCREMENT = 'counter/increment'
const DECREMENT = 'counter/decrement'
const MULTIPLY = 'counter/multiply'
const RESET = 'counter/reset'

// Action Creator
export const increment = () => ({ type: INCREMENT as typeof INCREMENT })

export const decrement = () => ({ type: DECREMENT as typeof DECREMENT })

export const multiply = (amount: number) => ({
  type: MULTIPLY as typeof MULTIPLY,
  payload: {
    amount,
  },
})

export const reset = () => ({ type: RESET as typeof RESET })

type Action = ReturnType<
  typeof increment | typeof decrement | typeof multiply | typeof reset
>

// State
const initialState = {
  value: 0,
}

export type CounterState = typeof initialState

export const reducer = (state = initialState, action: Action) => {
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
