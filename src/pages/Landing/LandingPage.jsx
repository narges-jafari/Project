import React from 'react'
import Landing from '../../components/Landing'
import NotLoginPage from '../../components/NotLogin'

const LandingPage = () => {
  const password = JSON.parse(localStorage.getItem('password'))

  return (
    <>
    {password?
      <Landing />:
      <NotLoginPage/>}
    </>
  )
}

export default LandingPage
