const GET_TITLE = 'setting/get'
const SET_TITLE = 'setting/set'

interface SetTitle {
  type: typeof SET_TITLE
  payload: string
}

type Action = SetTitle

export const setTitle = (title: string) => ({ type: SET_TITLE, payload: title })

export interface SettingState {
  title: string
}

const initialState: SettingState = {
  title: '',
}

export const reducer = (state: SettingState = initialState, action: Action) => {
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
