import { connect } from 'react-redux'
import { State as RootState } from '../../../reducers'
import * as CounterActions from '../../../reducers/counter'
import Counter from './Counter'

interface OuterProps {}

interface Props {
  value: number
}

// connect
const mapStateToProps = (state: RootState, props: OuterProps): Props => {
  return {
    value: state.counter.value,
  }
}

const Enhancer = connect(
  mapStateToProps,
  {
    increment: CounterActions.increment,
    decrement: CounterActions.decrement,
    multiply: CounterActions.multiply,
    reset: CounterActions.reset,
  }
)

export default Enhancer(Counter)
