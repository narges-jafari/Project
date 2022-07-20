import React, { useState } from 'react'
export const Context = React.createContext()
export const ContextProvider = ({ children }) => {
  const [name, setName] = useState()
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <Context.Provider value={[{ name, setName }, { mobile, setMobile }, { email, setEmail }, { password, setPassword }]}>
      {children}
    </Context.Provider>
  )
}
