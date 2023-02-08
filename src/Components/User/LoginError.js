export default function LoginError2(values) {
  let errors = {};
  
  if (!values.email) {
      errors.email = "Email is required";
  } else if (!values.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      errors.email = "Please Enter Valid Email Address ";
    }

  if (!values.password) {
      errors.password = "password is required";
    } 
  return errors;
}
