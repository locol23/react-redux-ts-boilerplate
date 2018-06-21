import * as React from 'react'
import { Provider } from 'react-redux'
import createStore from '../../store/createStore'
import Counter from '../organisms/counter'
import Layout from '../templates/Layout'

export default () => (
  <Provider store={createStore()}>
    <Layout>
      <Counter />
    </Layout>
  </Provider>
)
