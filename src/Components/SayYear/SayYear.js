import React, { Component } from "react";
import './SayYear.css'
import SayYearForm from './SayYearForm'


class SayYear extends Component {
  render () {

  const expenseSubmitHandler = (date) => {
    return;
  }

  return (
    <div className="date-form">
      <SayYearForm onDateSubmit={expenseSubmitHandler}/>
    </div>
  )
  }
}

export default SayYear;