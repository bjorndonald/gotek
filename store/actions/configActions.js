export const test = () => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: '<CONFIG_ACTION>' })
  }
}
