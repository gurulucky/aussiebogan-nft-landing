import {
  SET_ALERT,
} from './types';


export const setAlert = (open, text) => dispatch => {
  dispatch({
    type: SET_ALERT,
    payload: { alertOpen: open, alertText: text }
  })
}
