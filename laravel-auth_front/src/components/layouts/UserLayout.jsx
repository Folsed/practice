import React from 'react'
import Header from '../header/Header'
import { Navigate, Outlet } from 'react-router-dom'
import { userAuthContext } from '../../providers/AuthProvider'

const UserLayout = () => {
    const { userToken } = userAuthContext()

    if (!userToken) {
        return <Navigate to='/' replace={true} />
    }

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default UserLayout