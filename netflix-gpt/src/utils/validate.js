const ValidateInput = (email, password, name, isSignedUp) => {
  let isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  let isPasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isSignedUp && !name) return "Please enter name";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordvalid) return "Password not valid";

  return null;
};

export default ValidateInput;
