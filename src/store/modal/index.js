import * as actions from "./actions";

export default {
  open: (name) => {
    return (dispatch) => {
      dispatch(actions.open(name));
    };
  },
  close: (name) => {
    return (dispatch) => {
      dispatch(actions.close(name));
    };
  },
};
