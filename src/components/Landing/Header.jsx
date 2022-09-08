
import React, { useState } from 'react'
import styles from '../../assets/styles/Header.module.css'

const Header = () => {
  const password = JSON.parse(localStorage.getItem('password'))
  const username = JSON.parse(localStorage.getItem('username'))
  const sub = JSON.parse(localStorage.getItem('submit'))
  const result = sub.length
  //   const data = JSON.parse(localStorage.getItem('data'));

  // const showData =data.map((item)=>{
  //   <p>{item.id}</p>
  // })
  // if(sub ){
  //   return
  // }else{
  //   return 'niiii'
  //   }

  console.log(result)

  return (
    <>

      <div className={styles.headerContentCss}>
        <div className={styles.headerContentItemCss}>
          <span className='mx-4'>{password}<i className='fa fa-lock mx-1' /></span>
          <span>{username}<i className='fa fa-user mx-1' /></span>

        </div>
        <div className={styles.headerContentItemCss}>
          <span>Result:{result}</span>

        </div>

      </div>

    </>
  )
}

export default Header