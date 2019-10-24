import React, { useState } from "react"
import moment from "moment"

const DateOfBirthInput = () => {
  const [date, setDate] = useState()
  const [showUnderagedMessage, setShowUnderagedMessage] = useState(false)

  const handleChange = e => {
    setDate(e.target.value)
    setShowUnderagedMessage(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!moment(date).isValid()) {
      return
    }
    validateAge(date)
  }

  const validateAge = date => {
    const age = calculateAge(date)
    if (age >= 18) {
      alert(moment(date).format("YYYY-MM-DD"))
    } else {
      setShowUnderagedMessage(true)
    }
  }

  const calculateAge = birthDate => {
    return moment().diff(moment(birthDate), "years")
  }

  return (
    <div className={"dateOfBirthWrapper"}>
      <h1 className={"h1DateOfBirth"}>Enter Date of Birth</h1>
      <form className={"formDateOfBirth"} onSubmit={handleSubmit}>
        <input
          className={"inputDateOfBirth"}
          type="date"
          onChange={handleChange}
          required
          pattern="\d{4}-\d{2}-\d{2}"
          placeholder="YYYY-MM-DD"
          title="YYYY-MM-DD"
        />
        <input className={"btnDateOfBirth"} type="submit" value="Next" />
      </form>
      {showUnderagedMessage && <p>Sorry. You are not old enough.</p>}
    </div>
  )
}

export default DateOfBirthInput
