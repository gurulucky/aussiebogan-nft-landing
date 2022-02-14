import * as types from '../actions/types';

const initialState = {
  status: "",
  modalText: "",
  modalOpen: false,
  paymentOpen: false,
  nfts: []
};

function managerReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case types.SET_MODAL:
      return {
        ...state,
        ...payload
      };
    case types.SHOW_PAYMENT:
      return {
        ...state,
        paymentOpen: payload
      }
    case types.SET_NFTS:
      return {
        ...state,
        nfts: payload
      }
    default:
      return state;
  }
}

export default managerReducer;
