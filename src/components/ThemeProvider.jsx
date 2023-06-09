import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`App justify-center items-center ${theme}`}>
      <div className={`rounded-xl card-size drop-shadow-2xl ${theme}`}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {props.children}
        </ThemeContext.Provider>
      </div>
    </div>
  )
}

export default ThemeProvider
