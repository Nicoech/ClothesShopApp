const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, content, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]} `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
