import styles from './layout.module.css'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import { NavLink, Navigate, Outlet, useLocation } from 'react-router-dom'
import { userAuthContext } from '../../providers/AuthProvider'

const GuestLayout = () => {
    const location = useLocation()

    const { userToken } = userAuthContext()
    if (userToken) {
        return <Navigate to='/users' replace={true} />
    }

    return (
        <>
            {location.pathname !== '/' ?
                <NavLink className={styles.homeButton} to={'/'}>
                    <MdKeyboardDoubleArrowLeft size={36} />
                </NavLink>
                : ''}
            <Outlet />
        </>
    )
}

export default GuestLayout