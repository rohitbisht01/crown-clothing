// action creater function ==> return object

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
