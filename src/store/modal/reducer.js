import * as types from "./types.js";

export const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_MODAL_CLOSED:
      return {
        ...state,
        [action.payload.name]: false,
      };
    case types.SET_MODAL_OPENED:
      return {
        ...state,
        [action.payload.name]: true,
      };
    default:
      return state;
  }
}
