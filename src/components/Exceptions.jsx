// FormValidation.js

export const validateName = (name) => {
    if (!name) {
      return "Name is required";
    }
    return "";
  };
  
export const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };
  
export const validatePhone = (phone) => {
    if (!phone) {
      return "Phone number is required";
    }
    if (!/^\d{10}$/.test(phone)) {
      return "Please enter a valid phone number";
    }
    return "";
  };
  
export const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };
  
export const validateDateOfBirth = (dob) => {
    if (!dob) {
      return "Date of birth is required";
    }
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age > 100) {
      return "You cannot be over 100 years old";
    }
    return "";
  };
  