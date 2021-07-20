const initState = {
  moving: false,
  current: 1
}

const configReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SLIDE_LEFT':
      state.moving = true
      return state
    default:
      return state
  }
}

export default configReducer
