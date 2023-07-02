/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect, useState } from "react";
import { AES, enc } from 'crypto-js'


const AuthContext = createContext({
    currentUser: {},
    setCurrentUser: null,
    userToken: () => { },
    setUserToken: () => { }
})

export const AuthProvider = ({ children }) => {
    const [currentUser, _setCurrentUser] = useState('')
    const [userToken, _setUserToken] = useState('')

    useEffect(() => {
        const parsedUserData = localStorage.getItem('user_traits')
        const decryptedUserData = parsedUserData
            ? AES.decrypt(parsedUserData, 'user').toString(enc.Utf8)
            : ''

        _setCurrentUser(decryptedUserData ? JSON.parse(decryptedUserData) : '')
        _setUserToken(localStorage.getItem('TOKEN') || '')
    }, [])


    const setCurrentUser = (data) => {
        const encryptedUser = AES.encrypt(JSON.stringify(data), 'user').toString()
        if (encryptedUser) {
            localStorage.setItem('user_traits',encryptedUser)
        } else {
            localStorage.removeItem('user_traits')
        }
        _setCurrentUser(data)
    }

    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem('TOKEN', token)
        } else {
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token)
    }

    return (
        <AuthContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const userAuthContext = () => useContext(AuthContext)