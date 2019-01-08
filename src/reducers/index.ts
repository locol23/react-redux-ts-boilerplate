import { connect } from 'react-redux'
import { InferableComponentEnhancerWithProps } from 'recompose'
import { Action, combineReducers } from 'redux'
import * as counter from './counter'
import * as setting from './setting'

export interface RootState {
  counter: counter.CounterState
  setting: setting.SettingState
}

const allAction = { counter, setting }

export type AllAction = typeof allAction

export const rootReducer = combineReducers({
  counter: counter.reducer,
  setting: setting.reducer,
})

export const connector = <OwnProps, StateProps, SelectedAction>(
  mapStateToProps: (state: RootState, ownProps?: OwnProps) => StateProps,
  selectAction: (actions: AllAction) => SelectedAction
): InferableComponentEnhancerWithProps<StateProps & SelectedAction, OwnProps> =>
  connect(
    mapStateToProps,
    selectAction(allAction)
  ) as any
