import styles from './users.module.css'
import { RxAvatar } from 'react-icons/rx'
import { userAuthContext } from '../../providers/AuthProvider'
import MainButton from '../../UI/button/MainButton'
import { formattedDate } from '../../helpers/formattedDate'
import { useState } from 'react'
import UserEdit from './UserEdit'

const UserInfo = () => {
    const { currentUser } = userAuthContext()
    const [active, setActive] = useState(false)

    return (
        <div className={styles.leftSection}>
            {active ?
                <UserEdit setActive={setActive} />
                :
                <div className={styles.userInfo}>
                    <div className={styles.avatar}>
                        <RxAvatar size={156} />
                    </div>
                    <div className={styles.textInfo}>
                        <div className={`${styles.text} ${styles.initials}`}>
                            <h3>{currentUser.name + ' ' + currentUser.surname}</h3>
                        </div>
                        <div className={styles.text}>
                            <span>Pronoun</span>
                            <span>{currentUser.pronoun}</span>
                        </div>
                        <div className={styles.text}>
                            <span>Nationality</span>
                            <span>{currentUser.nationality}</span>
                        </div>
                        <div className={styles.text}>
                            <span>Organization</span>
                            <span>{currentUser.organization}</span>
                        </div>
                        <div className={styles.text}>
                            <span>Post</span>
                            <span>{currentUser.post}</span>
                        </div>
                        <div className={styles.text}>
                            <span>Birthday</span>
                            <span>{formattedDate(currentUser.birthday)}</span>
                        </div>
                        <div className={styles.text}>
                            <span>Email</span>
                            <span>{currentUser.email}</span>
                        </div>
                    </div>
                    <MainButton title={'Edit Info'} onClick={() => setActive(true)} />
                </div>
            }
        </div>
    )
}

export default UserInfo