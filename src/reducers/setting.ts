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
  if (action.type === SET_TITLE) {
    return {
      ...state,
      title: action.payload,
    }
  }
  return state
}
