// all the code related to redux
// actual base reducer that combine all our states togethers

// User-reducer == stores the state of our user
// combineReducers from redux helps us to combine all the reducers we are using
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
