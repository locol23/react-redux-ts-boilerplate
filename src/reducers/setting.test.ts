import { reducer } from './setting'

test('should return the initial state', () => {
  expect(
    reducer(undefined, { type: undefined as any, payload: '' })
  ).toMatchSnapshot()
})
