import * as types from '../actions/types';

const initialState = {
  status: "",
  alertText: "",
  alertOpen: false,
};

function managerReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case types.SET_ALERT:
      return {
        ...state,
        ...payload
      };    
    default:
      return state;
  }
}

export default managerReducer;
