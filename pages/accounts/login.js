import React from "react";
import styles from "../../styles/Accounts.module.css";
import Head from "next/head";
const Login = () => {
  if (false) {
    return (
      <>
        <Head>
          <title>Login</title>
        </Head>
        <div className={styles.LoadingSpinner}></div>
      </>
    );
  }
  return (
    <div className={styles.SignUp}>
      <form className={styles.Form}>
        <input type="email" name="email" placeholder="Email Address" />
        <input type="password" name="password" placeholder="Password" />
        <p>Forgot Password?</p>
        <button>Login</button>
        <h6>Do not have an account? Sign Up</h6>
      </form>
    </div>
  );
};

export default Login;
