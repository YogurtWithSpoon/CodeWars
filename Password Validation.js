function validate(password) {
  return (
    password.length >= 6 &&
    /[a-z]/g.test(password) &&
    /[A-Z]/g.test(password) &&
    /[\d]/g.test(password) &&
    !/[^a-zA-Z\d]/.test(password)
  );
}

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number

