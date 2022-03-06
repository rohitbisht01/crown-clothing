import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import "./signin-signup.styles.scss";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => {
  return (
    <div className="signin-signup">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
