/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import InputField from '../../../UI/input/InputField'
import styles from './login.module.css'
import MainButton from './../../../UI/button/MainButton'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login, errors } = useAuth()

    const onSubmit = (e) => {
        e.preventDefault()

        const payload = {
            email: email,
            password: password,
        }

        login.mutate(payload)
    }

    console.log(errors)
    
    return (
        <div className={styles.wrapper} onSubmit={onSubmit} >
            <h3>Sign In</h3>
            <form noValidate className={styles.loginForm}>
                <div className={styles.fields}>
                    <InputField
                        placeholder={'Email'}
                        value={email}
                        setValue={setEmail}
                        type='email'
                        className={errors ? styles.error : ''}
                        isError={errors.email}
                    />
                    <InputField
                        placeholder={'Password'}
                        value={password}
                        setValue={setPassword}
                        type='password'
                        isError={errors.password}
                    />
                </div>
                <div className={styles.submit}>
                    <MainButton title={'Sign In'} isLoading={login.isLoading}/>
                    <div className={styles.choice}>
                        <span>Don't Have An Account?</span>
                        <NavLink
                            to={'/register'}
                            className={styles.linkTo}
                        >
                            Sign Up
                        </NavLink>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Login