import {useState} from 'react'

import './index.css'

const TextInput = () => {
  const [searchInput, setSearchInput] = useState('')
  const [isClicked, setIsClicked] = useState(false)

  const changeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const changeState = () => {
    setIsClicked(prevState => !prevState)
  }

  return (
    <div className="container">
      <div className="text-container">
        <h1 className="heading">Editable Text Input</h1>
        <>
          {isClicked === false ? (
            <div>
              <input
                value={searchInput}
                onChange={changeSearchInput}
                type="text"
                className="input-element"
              />
              <button className="button" type="button" onClick={changeState}>
                Save
              </button>
            </div>
          ) : (
            <div className="para-container">
              <p className="para">{searchInput}</p>
              <button className="button" type="button" onClick={changeState}>
                Edit
              </button>
            </div>
          )}
        </>
      </div>
    </div>
  )
}

export default TextInput
