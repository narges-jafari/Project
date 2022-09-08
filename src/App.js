import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/Landing/LandingPage'

function App () {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<LandingPage />} />

        </Routes>
      </Router>
    </div>

  )
}

export default App
