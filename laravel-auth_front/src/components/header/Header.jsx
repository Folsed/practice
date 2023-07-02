import { NavLink } from 'react-router-dom'
import styles from './header.module.css'
import AnimatedPage from '../animation/AnimatedPage'
import useAuth from '../../hooks/useAuth'

const Header = () => {
    const { logout } = useAuth()

    const onLogout = (e) => {
        logout.mutateAsync()
    }

    return (
        <div className={styles.header}>
            <AnimatedPage>
                <nav className={styles.navbar}>
                    <ul className={styles.list}>
                        <li>
                            <NavLink
                                to={'/users'}
                                className={({ isActive }) =>
                                    isActive ? `${styles.item} ${styles.active}` : styles.item
                                }
                            >
                                Users
                            </NavLink>
                        </li>
                        <li onClick={(e) => onLogout(e)}>
                            <button className={styles.item}>Logout</button>
                        </li>
                    </ul>
                </nav>
            </AnimatedPage>
        </div>
    )
}

export default Header