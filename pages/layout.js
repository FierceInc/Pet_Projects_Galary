import React from 'react';
import styles from '../styles/Layout.module.css'
const Layout = () => {
    return (
            <nav className={styles.Nav}>
                <div className={styles.LogoHolder}>
                    <p>LOGO</p> 
                </div>
                <ul className={styles.NavList}>
                    <li>Create Account</li>
                    <li>Login</li>
                </ul>
            </nav>
    );
}

export default Layout;
