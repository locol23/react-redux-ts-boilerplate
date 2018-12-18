const SET_TITLE = 'setting/setTitle'

export const setTitle = (title: string) => ({
  type: SET_TITLE as typeof SET_TITLE,
  payload: title,
})

type Action = ReturnType<typeof setTitle>

const initialState = {
  title: '',
}

export type SettingState = typeof initialState

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_TITLE: {
      return {
        ...state,
        title: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
