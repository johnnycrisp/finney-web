import React from 'react'

const DropDown = () => {
  return (
     <div className="dropdown">
  {/* <label for="genre-select">Genre:</label> */}
  <select name="genres" id="genre-select">
    <option value="commercial">Commercial</option>
    <option value="narrative">Narrative</option>
    <option value="music">Music</option>
    <option value="other">Other</option>
  </select>
  </div>
  )
}

export default DropDown