import AnimatedPage from '../../components/animation/AnimatedPage'
import UserInfo from '../../components/users/UserInfo'
import UsersTable from '../../components/users/UsersTable'
import styles from './users-page.module.css'

const UsersPage = () => {
    return (
        <div className={styles.wrapper}>
            <AnimatedPage>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <UserInfo />
                        <UsersTable />
                    </div>
                </div>
            </AnimatedPage>
        </div>
    )
}

export default UsersPage