
import React from 'react'
import styles from '../../assets/styles/Header.module.css'

const Header = () => {
  const password = JSON.parse(localStorage.getItem('password'))
  const username = JSON.parse(localStorage.getItem('username'))
  const filter = JSON.parse(localStorage.getItem('filter'))
  const submit = JSON.parse(localStorage.getItem('submit'))
  const result = filter.length

 
  console.log(result)

  return (
    <>

      <div className={styles.headerContentCss}>
        <div className={styles.headerContentItemCss}>
          <span className='mx-4'>{password}<i className='fa fa-lock mx-1' /></span>
          <span>{username}<i className='fa fa-user mx-1' /></span>

        </div>
        <div className={styles.headerContentItemCss}>
          {submit?
          <span>Result:{result}</span>:
          <span>Result:0</span>
          }

        </div>

      </div>

    </>
  )
}

export default Header
