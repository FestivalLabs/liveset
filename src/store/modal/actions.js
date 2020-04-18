import * as types from "./types";

export function close(name) {
  return {
    type: types.SET_MODAL_CLOSED,
    payload: { name },
  };
}

export function open(name) {
  return {
    type: types.SET_MODAL_OPENED,
    payload: { name },
  };
}
