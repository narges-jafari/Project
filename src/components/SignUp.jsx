import React, { useState } from 'react'
import styles from '../assets/styles/SignUp.module.css'
import icon1 from '../assets/img/google.PNG'
import icon2 from '../assets/img/facebook.PNG'

const SignUp = () => {
  const [ name, setName] = useState()
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [submit, setSubmit] = useState()

  fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
  //   variable:{
  //   firstName:name,
  //   lastName: mobile,
  //   maidenName:email,
  //   age:password

  // }
    // mobile: mobile,
    // email: email,
    // password:password
    /* other user data */
  })
})
.then(res => res.json())
.then(console.log);
  return (
    <>
    
      <div className={styles.content}>
      <div className={styles.header}>
        <span className='mx-3 '>9:40</span>
        <div className='px-3'>
        <i className='fa fa-signal mx-2' />
        <i className='fa fa-wifi mx-2' />
        <i className='fa   fa-battery-full mx-2' />

        </div>

      </div>

        <div>
          <button className={styles.arrowLeftbtn}><i className='fa fa-arrow-left text-light' /></button>
        </div>
        <h3 className={styles.h3Css}>Sign Up</h3>
        <h6 className={styles.h6Css}>create an account here</h6>
        <div className={styles.divInputName}>
          <i className='fa fa-user px-2 pt-2 ' style={{position:'absolute',marginTop:'35px',borderRight:'1px solid rgba(197, 195, 195, 0.553)'}}/>
          <input placeholder='create an account here' value={name}   onChange={e =>setName(e.target.value)} className={styles.inputName}/>
        </div>
        <div className={styles.divInputName}>
          <i className='fa fa-mobile px-2 pt-2  fa-lg' style={{position:'absolute',marginTop:'35px',borderRight:'1px solid rgba(197, 195, 195, 0.553)'}}/>
          <input placeholder='mobile' className={styles.inputName}/>
        </div>
        <div className={styles.divInputName}>
          <i className='fa fa-envelope-o px-2 pt-2 ' style={{position:'absolute',marginTop:'35px',borderRight:'1px solid rgba(197, 195, 195, 0.553)'}}/>
          <input placeholder='email' className={styles.inputName}/>
        </div>
        <div className={styles.divInputName}>
          <i className='fa fa-lock px-2 pt-2 ' style={{position:'absolute',marginTop:'35px',borderRight:'1px solid rgba(197, 195, 195, 0.553)'}}/>
          <input placeholder='password ' className={styles.inputName}/>
          <i className='fa fa-eye' style={{position:'absolute',marginTop:'42px',marginLeft:'-30px'}}/>
        </div>
        <span className={styles.spanCss }>
            By Signing up you agree with our Teams of Use
        </span>
        <button className={styles.btnRegister}   
        onClick={() =>setSubmit({
          variables: {
          firstName:name,
          lastName: mobile,
          maidenName:email,
          age:password}
                            })}>Sign Up</button>
       <div className={styles.lineDiv}>
        <hr className={styles.hrCss}/>
        <div className={styles.spanOR}>OR</div>
        <hr className={styles.hrCss}/>
       </div>
       <div className={styles.btnDiv}>
        <img src={ icon1 } className={styles.pic}/>
       <button className={styles.btnLogin}>Login with Google</button>
       </div>
       <div className={styles.btnDiv}>
       <img  src={ icon2 } className={styles.pic}/>
       <button className={styles.btnLogin}>Login with Facebok</button>
       </div>
       <div className='d-flex flex-row flex-w-rap justify-content-center'>
        <span className='text-secondary px-2'>New member?</span>
        <span style={{color:'#00809d'}} >Sign Up</span>
       </div>
       </div>
  
    </>
  )
}

export default SignUp
