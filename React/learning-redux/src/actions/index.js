export const increment = (data = 1) => {
  return {
    type: "Increment",
    payload: data
  };
};

export const decrement = (data = 1) => {
  return {
    type: "Decrement",
    payload: data
  };
};

export const IsLoggedIn = (status = false) => {
  return {
    type: "Logged_In",
    payload: status
  };
};
