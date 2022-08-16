import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import "../button/button.styles.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();

    window.location.replace("/");

    toast("Login with Google Account Successful!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "toast-message",
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try
    {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      window.location.replace("/");

      toast("Login successful!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "toast-message",
      });

      resetFormFields();
    } catch (error)
    {
      switch (error.code)
      {
        case "auth/wrong-password":
          toast.error("Incorrect Password", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          break;
        case "auth/user-not-found":
          toast.error("User doesn`t exist", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          break;
        default:
          console.log(error);
      }
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h3>Already have an account? </h3>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmitHandler}>
        <FormInput
          label={"Email"}
          required
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label={"Password"}
          required
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            SIGN IN
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
          <div>
            <ToastContainer className="toast-message" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
