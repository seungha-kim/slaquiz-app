export const HELLO = 'HELLO';

export const increase = () => ({
  type: HELLO,
})

export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase())
  }, 1000)
}
