import actionType from "../constant/constant";

export function changeUserName(param) {
  return dispatch => {
    dispatch({
      type: actionType.CHANGE_USERNAME,
      payload: {
        username:
          String(param)
            .slice(0, 1)
            .toUpperCase() +
          String(param)
            .slice(1)
            .toLowerCase()
      }
    });
  };
}
