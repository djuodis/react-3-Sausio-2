import React, { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import Table from './components/Table'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [data, setData] = useState([
    { firstName: 'Jonas', lastName: 'Rimkus', age: 54 },
    { firstName: 'Vestina', lastName: 'Petronytė', age: 31 },
    { firstName: 'Marius', lastName: 'Dulinskas', age: 23 },
  ])

  const handleAdd = () => {
    if (firstName && lastName && age) {
      const newData = { firstName, lastName, age: parseInt(age) }
      setData([...data, newData])
      setFirstName('')
      setLastName('')
      setAge('')
    }
  }

  const handleRemoveFirst = () => {
    if (data.length > 0) {
      const newData = [...data]
      newData.shift()
      setData(newData)
    }
  }

  const handleRemoveLast = () => {
    if (data.length > 0) {
      const newData = [...data]
      newData.pop()
      setData(newData)
    }
  }

  return (
    <div>
      <h1>Append table</h1>
      <Input
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        age={age}
        setAge={setAge}
      />
      <Button
        onClickAdd={handleAdd}
        onClickRemoveFirst={handleRemoveFirst}
        onClickRemoveLast={handleRemoveLast}
      />
      <Table data={data} />
    </div>
  )
}

export default App
