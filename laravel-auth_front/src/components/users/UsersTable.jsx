import { Fragment } from 'react'
import useUser from '../../hooks/useUser'
import styles from './users.module.css'
import { formattedDate } from '../../helpers/formattedDate'
import Spinner from '../../UI/loader/Spinner'

const UsersTable = () => {
    const { getUsers } = useUser()

    return (
        <div className={styles.rightSection}>
            {getUsers.isLoading ? <Spinner size={24} /> :
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.thead}>
                            <th>№</th>
                            <th>User</th>
                            <th>Organization</th>
                            <th>Email</th>
                            <th>Registered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getUsers.data.map((item) => (
                            <Fragment key={item.user_number}>
                                <tr className={styles.tbody}>
                                    <td><span>{item.user_number}</span></td>
                                    <td className={styles.title}><span>{item.name + ' ' + item.surname}</span></td>
                                    <td><span>{item.organization}</span></td>
                                    <td><span>{item.email}</span></td>
                                    <td><span>{formattedDate(item.created_at)}</span></td>
                                </tr>
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default UsersTable