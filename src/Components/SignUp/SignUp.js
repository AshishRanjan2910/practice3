import React, { Component } from "react";
import Button from "./Button/Button";

import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      error: null,
      isFormFilled: false,
    };
  }
  render() {
    const { username, password, confirmPassword, error, isFormFilled } =
      this.state;
    const usernameChangeHandler = (event) => {
      this.setState({ username: event.target.value });
      formFilledCheck(username, password, confirmPassword);
    };
    const passwordChangeHandler = (event) => {
      this.setState({ password: event.target.value });
      formFilledCheck(username, password, confirmPassword);
    };
    const confirmPasswordChangeHandler = (event) => {
      this.setState({ confirmPassword: event.target.value });
      formFilledCheck(username, password, confirmPassword);
    };
    const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      const isValidPassword = passwordRegex.test(password);
      return isValidPassword;
    };
    const arePasswordConfirmed = (password, confirmPassword) => {
      return password === confirmPassword;
    };
    const formFilledCheck = (username, password, confirmPassword) => {
      if (
        password.trim().length === 0 ||
        confirmPassword.trim().length === 0 ||
        username.trim().length === 0
      ) {
        this.setState({ isFormFilled: false });
      } else {
        this.setState({ isFormFilled: true });
      }
    };
    const formSubmitHandler = (event) => {
      event.preventDefault();
      if (!validatePassword(password)) {
        this.setState({
          error:
            "Password must contain at least 8 characters, at least one capital letter and at least one small letter",
        });
        return;
      } else if (!arePasswordConfirmed(password, confirmPassword)) {
        this.setState({ error: "Passwords do not match" });
        return;
      }
      console.log("Successful signed up...");
    };
    return (
      <form className="form-control" onSubmit={formSubmitHandler}>
        <div>
          <label>Userame</label>
          <input
            label="username"
            type="string"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            label="Enter a password"
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            label="Confirm your password"
            type="password"
            value={confirmPassword}
            onChange={confirmPasswordChangeHandler}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Button type="submit" disabled={!isFormFilled}>
          login
        </Button>
      </form>
    );
  }
}

export default SignUp;
