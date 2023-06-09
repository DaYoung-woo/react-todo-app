import React, { useState, useContext } from 'react'
import ThemeContext from './ThemeContext'
export default function TodoBottom ({ addTodo }) {
  const { theme } = useContext(ThemeContext)
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className={`card-header rounded-b-xl flex items-center px-4 ${theme}`}>
      <input
        type="text"
        className="h-9 w-72 rounded-l-lg pl-3"
        placeholder="AddTodo"
        onChange={onChange}
        value={text}
      />
      <button
        className={`add-btn h-9 w-24 rounded-r-lg ${theme}`}
        onClick={() => addTodo(text)}
      >
        add
      </button>
    </div>
  )
}
