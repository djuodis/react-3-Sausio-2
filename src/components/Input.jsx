import React from 'react'

const Input = ({ firstName, setFirstName, lastName, setLastName, age, setAge }) => {
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }

  return (
    <div className="inputs">
        <input placeholder='vardas' type="name" value={firstName} onChange={handleFirstNameChange} />
        <input placeholder='pavardė' type="name" value={lastName} onChange={handleLastNameChange} />
        <input placeholder='amžius' type="number" value={age} onChange={handleAgeChange} />
    </div>
  )
}

export default Input
