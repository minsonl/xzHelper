import *as TYPES from '../constants/counterTypes';

const initialState = {
  count: 0,
}

export default function counter(state=initialState, action) {
  switch (action.type) {
    case TYPES.ADDITION:
      return {
        ...state,
        count: state.count + 1,
      }
      break;
    case TYPES.REDUCTION:
      return {
        ...state,
        count: state.count - 1,
      }
      break;
    default:
      return state;
  }
}
