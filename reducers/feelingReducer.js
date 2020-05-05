



const initialState = {
  buttonValue: null,
  imageValue: null,
}

const feelingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Feelings Updated':
      const firstPagestate = Object.assign({}, state);
      firstPagestate.buttonValue = action.buttonValue;
      firstPagestate.imageValue = action.imageValue;
      return firstPagestate;
    default:
      return state
  }
}

export default feelingReducer
