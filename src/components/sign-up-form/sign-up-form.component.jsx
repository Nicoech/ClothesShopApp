import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import "../button/button.styles.scss";

import {
  signInWithGooglePopUp,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      console.log("User creation encountered an error: ", error.message);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h3>Don't have an account? </h3>
      <span>Sign Up with your email and password</span>

      <form onSubmit={onSubmitHandler}>
        <FormInput
          label={"Display Name"}
          required
          type="text"
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />

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
        <FormInput
          label={"Confirm Password"}
          required
          type="password"
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType={"inverted"} type="submit">
          SIGN UP
        </Button>

      </form>
    </div>
  );
};

export default SignUpForm;
