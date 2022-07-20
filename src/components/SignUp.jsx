import React, { useState,useEffect } from 'react'
import styles from '../assets/styles/SignUp.module.css'
import icon1 from '../assets/img/google.PNG'
import icon2 from '../assets/img/facebook.PNG'
import {toast} from 'react-toastify';
 
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {

  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorUsername, setErrorUsername] = useState(null);

  const [message, setMessage] = useState("");

    function isValidEmail(email) {
      return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    }

  
    const handleEmailChange = event => {
      if (!isValidEmail(event.target.value)) {
        setErrorEmail('Email is invalid');
      } else {
        setErrorEmail(null);
      }
  
      setEmail(event.target.value);
    };
    function isValidPhone(num) {
      return /^(\+98?)?{?(0?9[0-9]{9,9}}?)$/.test(num);
    }
    const handlePhoneChange = event => {
      if (!isValidPhone(event.target.value)) {
        setErrorPhone('phone is invalid');}
       else {
        setErrorPassword(null);
      }
      setMobile(event.target.value)
    };

    function isValidUsername(user) {
      return /[a-zA-Z]\w{1,3}/.test(user);
    }

    const handleUsernameChange = event => {
      if (!isValidUsername(event.target.value)) {
       setErrorUsername ('please enter valid username');}
       else {
        setErrorUsername(null);
      }
  
      setName(event.target.value);
    };


    function isValidPassword(pass) {
      return /[a-zA-Z]\w{3,14}/.test(pass);
    }

    const handlePasswordChange = event => {
      if (!isValidPassword(event.target.value)) {
        setErrorPassword('password is invalid');
      }
       else {
        setErrorPassword(null);
      }
  
      setPassword(event.target.value);
    };

let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: name,
        email: email,
        phone: mobile,
        password:password,
      }),
    });
    // let resJson = await res.json();
    if (res.status === 200) {
      setName("");
      setEmail("");
      setPassword('');
      setMobile('');
      setMessage("successfully added");
      console.log(name);

    } else {
      setMessage("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};

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
        <form onSubmit={handleSubmit}>
        <div className={styles.divInputName}>
          <i className='fa fa-user px-2 pt-2 ' style={{ position: 'absolute', marginTop: '35px', borderRight: '1px solid rgba(197, 195, 195, 0.553)' }} />
          <input placeholder='create an account here' value={name} type='text' onChange={handleUsernameChange} className={styles.inputName} />
          {errorUsername && <h6 className='text-danger my-1' style={{fontSize:'10px'}}>{errorUsername}</h6>}

        </div>
        <div className={styles.divInputName}>
          <i className='fa fa-mobile px-2 pt-2  fa-lg' style={{position:'absolute',marginTop:'35px',borderRight:'1px solid rgba(197, 195, 195, 0.553)'}}/>
          <input placeholder='mobile' value={mobile} type='text'  onChange={handlePhoneChange} className={styles.inputName}/>
          {errorPhone && <h6 className='text-danger my-1' style={{fontSize:'10px'}}>{errorPhone}</h6>}

        </div>
        <div className={styles.divInputName}>
          <i className='fa fa-envelope-o px-2 pt-2 ' style={{position:'absolute',marginTop:'35px',borderRight:'1px solid rgba(197, 195, 195, 0.553)'}}/>
          <input placeholder='email' value={email} type='text'  onChange={handleEmailChange} className={styles.inputName}/>
          {errorEmail && <h6 className='text-danger my-1' style={{fontSize:'10px'}}>{errorEmail}</h6>}

        </div>
        <div className={styles.divInputName}>
          <i className='fa fa-lock px-2 pt-2 ' style={{position:'absolute',marginTop:'35px',borderRight:'1px solid rgba(197, 195, 195, 0.553)'}}/>
          <input placeholder='password ' value={password} type='text'  onChange={handlePasswordChange} className={styles.inputName}/>

          <i className='fa fa-eye' style={{position:'absolute',marginTop:'42px',marginLeft:'-30px'}}/>
          {errorPassword && <h6 className='text-danger my-1' style={{fontSize:'10px'}}>{errorPassword}</h6>}

        </div>
        <div className={styles.registerDiv}>
        <span className={styles.spanCss }>By Signing up you agree with our Teams of Use</span>
        <button className={styles.btnRegister}>Register</button>
        </div>
        {/* <div className={styles.registerDiv}>
        <span className={styles.spanCss }>
            By Signing up you agree with our Teams of Use
        </span>
        <button className={styles.btnRegister}
      type='submit'>Sign Up</button>
      </div>
              <div className="message text-success">{message ? <p>{message}</p> : null}</div> */}

      </form>
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
