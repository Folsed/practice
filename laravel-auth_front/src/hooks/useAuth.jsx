import { useState } from 'react'
import { useMutation } from 'react-query'
import axiosClient from '../axios'
import { userAuthContext } from '../providers/AuthProvider'

const useAuth = () => {
    const [errors, setErrors] = useState({})
    const { setCurrentUser, setUserToken } = userAuthContext()

    const register = useMutation(
        'register',
        async (formData) => {
            await axiosClient.post('/register', formData)
                .then(({ data }) => {
                    setCurrentUser(data.user)
                    setUserToken(data.token)
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = error.response.data.errors
                        setErrors(finalErrors)
                    }
                })
        }

    )

    const logout = useMutation(
        'logout',
        async () => {
            await axiosClient.post('/logout')
                .then((() => {
                    setCurrentUser(null)
                    setUserToken(null)
                }))
        }

    )

    const login = useMutation(
        'login',
        async (formData) => {
            await axiosClient.post('/login', formData)
                .then(({ data }) => {
                    setCurrentUser(data.user)
                    setUserToken(data.token)
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = error.response.data.errors
                        setErrors(finalErrors)
                    }
                })
        }

    )

    return { register, logout, login, errors }
}
export default useAuth