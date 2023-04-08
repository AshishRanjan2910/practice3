import React, { Component } from "react";
import "./SayYearForm.css";

class SayYearForm extends Component {
  constructor(props) {
    super(props);
    this.state = { enteredDob: "", age: "", invalid_msg: "" };
  }
  render() {
    const { enteredDob, age, invalid_msg } = this.state;
    const dateChangeHandler = (event) => {
      this.setState({ enteredDob: event.target.value });
    };

    const submitHandler = (event) => {
      event.preventDefault();
      this.setState({ age: "", invalid_msg: "" });

      const dob = new Date(this.state.enteredDob);
      const ageDiffMs = Date.now() - dob.getTime();
      const ageDate = new Date(ageDiffMs);
      const age = ageDate.getUTCFullYear() - 1970;
      if (age < 0) {
        this.setState({
          invalid_msg: "*Please, Enter a date earlier to present date!",
        });
        return;
      }

      this.setState({ age: age });
    };

    return (
      <div>
        <form onSubmit={submitHandler}>
          <div className="say-year__controls">
            <div className="say-year__control">
              <label>Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={enteredDob}
                onChange={dateChangeHandler}
              />
            </div>
            <button type="submit">Say Year</button>
            <div className="invalid-dob">{invalid_msg}</div>
          </div>
        </form>
        {age !== "" && !isNaN(age) && <p className="result-message">Your age is {age} years.</p>}
      </div>
    );
  }
}

export default SayYearForm;
