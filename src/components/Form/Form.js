import React, { useRef, useState } from "react";
export default function Form(props) {
    const [name, setName] = useState('')
    const addFieldRef = useRef(null)
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        if (name === '') {
          alert("Field shouldn't be empty!")
          addFieldRef.current.focus() 
          return    
        }
        props.addTask(name)
        document.getElementById('new-rem-input').value = ''
    }
    // useEffect(() => {
    //   addFieldRef.current.focus() 
    // })
    return (
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-rem-input" className="label__lg">
            What needs to be added?
          </label>
        </h2>
        <input
          type="text"
          id="new-rem-input"
          className="input input__lg"
          name="text"
          autoComplete="off" 
          onChange={handleChange}
          ref={addFieldRef}
        />
        <button type="submit" className="btn btn__primary btn__lg" > 
          Add
        </button>
      </form>    
    )
}