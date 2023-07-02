import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import GuestLayout from './components/layouts/GuestLayout'
import HomePage from './pages/home-page/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import UsersPage from './pages/users-page/UsersPage'
import UserLayout from './components/layouts/UserLayout'

const AppRouter = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<GuestLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
                <Route path="/users" element={<UserLayout />}>
                    <Route index element={<UsersPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AppRouter