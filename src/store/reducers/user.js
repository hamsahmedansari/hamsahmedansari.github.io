import actionType from "../constant/constant";

const InitialState = {
  username: "Hams"
};
export default (state = InitialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload.username
      };
    default:
      return state;
  }
};
