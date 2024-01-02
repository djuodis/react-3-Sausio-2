// Button.jsx
import React from 'react'

const Button = ({ onClickAdd, onClickRemoveFirst, onClickRemoveLast }) => {
  return (
    <div className="buttons">
      <button id="add" onClick={onClickAdd}>
        Pridėti
      </button>
      <button id="removeFirst" onClick={onClickRemoveFirst}>
        Ištrinti pirmą
      </button>
      <button id="removeLast" onClick={onClickRemoveLast}>
        Ištrinti paskutinį
      </button>
    </div>
  )
}

export default Button
