import { reducer, setTitle } from './setting'

test('should return the initial state', () => {
  expect(
    reducer(undefined, { type: undefined as any, payload: '' })
  ).toMatchSnapshot()
})

test('should handle SET_TITLE', () => {
  expect(reducer(undefined, setTitle('title'))).toMatchSnapshot()
})
