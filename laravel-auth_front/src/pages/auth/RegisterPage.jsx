import React from 'react'
import styles from './auth.module.css'
import Register from '../../components/auth/register/Register'
import AnimatedPage from '../../components/animation/AnimatedPage'


const RegisterPage = () => {
    return (
        <div className={styles.container}>
            <AnimatedPage>
                <Register />
            </AnimatedPage>
        </div>
    )
}

export default RegisterPage