import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'

function App () {
  return (
    <div className='App'>
      <Router>
      <Routes>
      <Route path='/SignUp' element={<SignupPage />} />
      </Routes>
    </Router>
    </div>
    
  )
}

export default App
