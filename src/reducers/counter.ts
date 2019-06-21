// Action
const INCREMENT = 'counter/increment' as const
const DECREMENT = 'counter/decrement' as const
const MULTIPLY = 'counter/multiply' as const
const RESET = 'counter/reset' as const

// Action Creator
export const increment = () => ({ type: INCREMENT })

export const decrement = () => ({ type: DECREMENT })

export const multiply = (amount: number) => ({
  type: MULTIPLY,
  payload: {
    amount,
  },
})

export const reset = () => ({ type: RESET })

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
      const _: never = action
      return state
    }
  }
}
