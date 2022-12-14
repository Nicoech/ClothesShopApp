import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <>
      <div className="auth-container">
        <div className="sign-in-form">
          <SignInForm />
        </div>
        <div className="signup-form">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default Authentication;
