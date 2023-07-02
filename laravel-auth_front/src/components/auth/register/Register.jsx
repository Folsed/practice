import { NavLink } from 'react-router-dom'
import InputField from '../../../UI/input/InputField'
import styles from './register.module.css'
import MainButton from '../../../UI/button/MainButton'
import useAuth from '../../../hooks/useAuth'
import { useState } from 'react'

const Register = () => {
    const { register, errors } = useAuth()
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [pronoun, setPronoun] = useState('')
    const [nationality, setNationality] = useState('')
    const [organization, setOrganization] = useState('')
    const [post, setPost] = useState('')
    const [birthday, setBirthday] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmed, setPasswordConfirmed] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            name: name,
            surname: surname,
            pronoun: pronoun,
            nationality: nationality,
            organization: organization,
            post: post,
            birthday: birthday,
            email: email,
            password: password,
            password_confirmation: passwordConfirmed,
        }

        register.mutate(payload)
    }

    console.log(errors)

    return (
        <div className={styles.wrapper}>
            <h3>Create Account</h3>
            <form noValidate className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.fields}>
                    <InputField
                        placeholder={'Name'}
                        value={name}
                        setValue={setName}
                        isError={errors.name}
                    />
                    <InputField
                        placeholder={'Surname'}
                        value={surname}
                        setValue={setSurname}
                        isError={errors.surname}
                    />
                    <InputField
                        placeholder={'Pronoun'}
                        value={pronoun}
                        setValue={setPronoun}
                        isError={errors.pronoun}
                    />
                    <InputField
                        placeholder={'Nationality'}
                        value={nationality}
                        setValue={setNationality}
                        isError={errors.nationality}
                    />
                    <InputField
                        placeholder={'Organization Name'}
                        value={organization}
                        setValue={setOrganization}
                        isError={errors.organization}
                    />
                    <InputField
                        placeholder={'Post'}
                        value={post}
                        setValue={setPost}
                        isError={errors.post}
                    />
                    <InputField
                        value={birthday}
                        setValue={setBirthday}
                        type='date'
                        className={styles.datePicker}
                        required
                        isError={errors.birthday}
                    />
                    <InputField
                        placeholder={'Email'}
                        value={email}
                        setValue={setEmail}
                        type='email'
                        isError={errors.email}
                    />
                    <InputField
                        placeholder={'Password'}
                        value={password}
                        setValue={setPassword}
                        type='password'
                        isError={errors.password}
                    />
                    <InputField
                        placeholder={'Password Confirm'}
                        value={passwordConfirmed}
                        setValue={setPasswordConfirmed}
                        type='password'
                        isError={errors.password}
                    />
                </div>
                <div className={styles.submit}>
                    <MainButton title={'Create Account'} isLoading={register.isLoading}/>
                    <div className={styles.choice}>
                        <span>Have An Account?</span>
                        <NavLink
                            to={'/login'}
                            className={styles.linkTo}
                        >
                            Sign In
                        </NavLink>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Register