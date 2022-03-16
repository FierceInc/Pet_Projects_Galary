import React from 'react';
import styles from '../../styles/Accounts.module.css'
import Head from 'next/head';
const Signup = () => {
    if(false) {
        return (
            <>
                <Head>
                <title>Create Account</title>
            </Head>
            <div className={styles.LoadingSpinner} ></div>
            </>
            
            
        )
    }
    return (
        <div className={styles.SignUp}>
            <p>Welcome to My Projects Galary. Where you can showcase and share your projects with the world. No need for a portfolio or coding.</p>

        <form className={styles.Form}>
         <input type="text" name="username" placeholder='Username' autoComplete='no' />
         <input type="email" name="email" placeholder='Email Address'/>
         <input type="password" name="password" placeholder='Password'/>
         <input type="password" name="passwordConfirm" placeholder='Confirm Passwword'/>
         <button>Sign Up</button>
         <h6>Already have an account? Login </h6>
       </form>  
       </div>
    );
}

export default Signup;
