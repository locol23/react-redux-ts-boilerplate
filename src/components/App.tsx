import * as React from 'react'
import {
  compose,
  lifecycle,
  setDisplayName,
  StateHandler,
  StateHandlerMap,
  withStateHandlers,
} from 'recompose'
import styled from 'styled-components'
import Contents from './Contents'

interface ComponentName {
  displayName: string
}
interface Props {}
interface StateProps {
  text: string
}

type StateHandlerProps = StateHandlerMap<StateProps> & {
  setText: StateHandler<StateProps>
}
type EnhancedProps = Props & StateProps & StateHandlerProps

const Component = (props: EnhancedProps) => (
  <Container>
    <Contents {...props} />
  </Container>
)

export default compose<EnhancedProps, Props>(
  setDisplayName<ComponentName>('App'),
  withStateHandlers<StateProps, StateHandlerProps, Props>(
    {
      text: '',
    },
    {
      setText: () => t => ({ text: t }),
    }
  ),
  lifecycle<EnhancedProps, {}, {}>({
    componentDidMount() {
      this.props.setText('Hello React')
    },
  })
)(Component)

const Container = styled.div`
  display: flex;
  justify-content: center;
`
