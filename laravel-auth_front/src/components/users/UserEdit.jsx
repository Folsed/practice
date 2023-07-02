import MainButton from '../../UI/button/MainButton'
import { userAuthContext } from '../../providers/AuthProvider'
import styles from './users.module.css'
import { RxAvatar } from 'react-icons/rx'
import InputField from '../../UI/input/InputField'
import { useState } from 'react'
import useUser from '../../hooks/useUser'

const UserEdit = ({ setActive }) => {
    const { currentUser } = userAuthContext()
    const { editInfo } = useUser(setActive)

    const [formData, setFormData] = useState({
        name: currentUser.name,
        surname: currentUser.surname,
        pronoun: currentUser.pronoun,
        nationality: currentUser.nationality,
        organization: currentUser.organization,
        post: currentUser.post,
        birthday: currentUser.birthday,
        email: currentUser.email,
    })

    const { name, surname, pronoun, nationality, organization, post, birthday, email } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        editInfo.mutate(formData)
    }

    return (
        <form noValidate onSubmit={handleSubmit}>
            <div className={styles.userInfo}>
                <div className={styles.avatar}>
                    <RxAvatar size={156} />
                </div>
                <div className={styles.textInfo}>
                    <InputField
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                    <InputField
                        placeholder="Surname"
                        name="surname"
                        value={surname}
                        onChange={handleChange}
                    />
                    <InputField
                        placeholder="Pronoun"
                        name="pronoun"
                        value={pronoun}
                        onChange={handleChange}
                    />
                    <InputField
                        placeholder="Nationality"
                        name="nationality"
                        value={nationality}
                        onChange={handleChange}
                    />
                    <InputField
                        placeholder="Organization"
                        name="organization"
                        value={organization}
                        onChange={handleChange}
                    />
                    <InputField
                        placeholder="Post"
                        name="post"
                        value={post}
                        onChange={handleChange}
                    />
                    <InputField
                        placeholder="Birthday"
                        name="birthday"
                        type="date"
                        value={birthday}
                        onChange={handleChange}
                        className={styles.datePicker}
                    />
                    <InputField
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.editActions}>
                    <MainButton
                        title="Edit Info"
                        type="submit"
                        isLoading={editInfo.isLoading}
                    />
                    <MainButton title="Cancel" onClick={() => setActive(false)} />
                </div>
            </div>
        </form>
    )
}

export default UserEdit