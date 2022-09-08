import React from 'react'
import img from '../assets/img/notlogin.JPG'
import styles from '../assets/styles/Login.module.css'

const NotLoginPage = () => {


  return (
    <>
      <div className={styles.notloginflex}>
        <div className={styles.notloginflexItem}>
          <img src={img} className={styles.imgcss} />
        </div>
        <div className={styles.notloginflexItem1}>
          <span>
          You are not logged in yet
          </span>
          <a href='login' className={styles.acss}>
            <span className='my-3 py-3' style={{ fontSize: '20px' }}> Login</span>
          </a>
          <span />
        </div>
      </div>

    </>

  )
}

export default NotLoginPage