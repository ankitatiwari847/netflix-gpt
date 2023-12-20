export const emailValidate = (email) => {
  let isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  console.log(email, isEmailValid);

  if (!isEmailValid) return "Email ID not valid";
  return null;
};

export const passwordValidate = (password) => {
  let isPasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isPasswordvalid) return "Password not valid";
  return null;
};
