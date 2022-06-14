import * as actions from "./actions";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case actions.increment:
      return state + 1;
    case actions.decerement:
      return state - 1;
    case actions.reset:
      return 0;
    default:
      return state;
  }
};

export default reducer;
