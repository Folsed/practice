import AnimatedPage from '../../components/animation/AnimatedPage'
import Login from '../../components/auth/login/Login'
import styles from './auth.module.css'

const LoginPage = () => {

    return (
        <div className={styles.container}>
            <AnimatedPage>
                <Login />
            </AnimatedPage>
        </div>
    )
}

export default LoginPage