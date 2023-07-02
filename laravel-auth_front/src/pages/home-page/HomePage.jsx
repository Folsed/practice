import styles from './home-page.module.css'
import MainButton from '../../UI/button/MainButton'
import { NavLink } from 'react-router-dom'
import AnimatedPage from '../../components/animation/AnimatedPage'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <AnimatedPage>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Hello :)</h1>
                    <div className={styles.actions}>
                        <MainButton title={'Sign In'} link={'/login'} />
                        <MainButton title={'Create Account'} link={'/register'} />
                    </div>
                </div>
            </AnimatedPage>
        </div>
    )
}

export default HomePage