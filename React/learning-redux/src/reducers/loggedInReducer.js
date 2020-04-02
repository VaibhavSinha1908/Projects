const loggedInReducer = (state = false, action) => {
  if (action.type === "Logged_In") {
    state = action.payload;
  }
  return state;
};

export default loggedInReducer;
