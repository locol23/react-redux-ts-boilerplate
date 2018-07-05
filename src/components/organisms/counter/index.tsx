import * as React from 'react'
import { AllAction, connector, RootState } from '../../../reducers'
import { Counter as CounterContent } from './Counter'

const mapStateToProps = (state: RootState) => {
  return {
    title: state.setting.title,
    value: state.counter.value,
  }
}

const selectAction = (actions: AllAction) => {
  return {
    setTitle: actions.setting.setTitle,
    increment: actions.counter.increment,
    decrement: actions.counter.decrement,
    multiply: actions.counter.multiply,
    reset: actions.counter.reset,
  }
}

export const Counter = connector(mapStateToProps, selectAction)(
  (props: any) => <CounterContent {...props} />
)
