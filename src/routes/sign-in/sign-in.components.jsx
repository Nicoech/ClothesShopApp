import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDockRef = await createUserDocumentFromAuth(user);

    console.log(userDockRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In On Google PopUp</button>
    </div>
  );
};

export default SignIn;
