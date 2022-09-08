import React, { useState, useEffect } from 'react'
import styles from '../assets/styles/Login.module.css'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  // auth function
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: name,
          password

        })
      })

      if (res.status === 200) {
        // console.log(res.json())
        window.location.href = '/home'
      } else {

      }
    } catch (err) {
    }
  }

  // Save user password and username
  useEffect(() => {
    localStorage.setItem('password', JSON.stringify(password))
  }, [password], localStorage.setItem('username', JSON.stringify(name)), [name])

  return (
    <>
      <div className={styles.content}>

        <h3 className={styles.h3Css}>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.divInputName}>
            <i className='fa fa-user px-2 pt-2 ' style={{ position: 'absolute', marginTop: '35px', borderRight: '1px solid rgba(197, 195, 195, 0.553)' }} />
            <input
              placeholder=' username'
              value={name}
              type='text'
              onChange={e => { setName(e.target.value) }}
              className={styles.inputName}
            />

          </div>

          <div className={styles.divInputName}>
            <i className='fa fa-lock px-2 pt-2 ' style={{ position: 'absolute', marginTop: '35px', borderRight: '1px solid rgba(197, 195, 195, 0.553)' }} />
            <input
              type='text'
              placeholder='password '
              value={password}
              onChange={e => { setPassword(e.target.value) }}
              className={styles.inputName}
            />

          </div>
          <div className={styles.registerDiv}>
            <button className={styles.btnRegister}>Login</button>
          </div>

        </form>

      </div>
    </>
  )
}

export default Login
