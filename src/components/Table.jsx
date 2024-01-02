import React from 'react'

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Vardas</th>
          <th className="darker">Parvardė</th>
          <th>Amžius</th>
        </tr>
      </thead>
      <tbody id="dataPlace">
        {data.map((person, index) => (
          <tr key={index}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
