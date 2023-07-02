import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import axiosClient from '../axios'
import { userAuthContext } from '../providers/AuthProvider'

const useUser = (setActive) => {
    const [errors, setErrors] = useState()
    const { setCurrentUser } = userAuthContext()

    const getUsers = useQuery(
        ['user', 'all'],
        async () => await axiosClient.get('/get/users'),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data.users

        }
    )

    const editInfo = useMutation(
        ['user-info', 'update'],
        async (formData) => {
            await axiosClient.post('/user/edit', formData)
                .then(response => {
                    setCurrentUser(response.data.user)
                    setActive(false)
                    getUsers.refetch()
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = error.response.data.errors
                        setErrors(finalErrors)
                    }
                })
        },

    )
    return { getUsers, editInfo, errors }
}

export default useUser