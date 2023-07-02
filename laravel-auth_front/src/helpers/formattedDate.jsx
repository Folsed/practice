import { format } from 'date-fns'

export const formattedDate = (date) => {
    const formattedDate = format(new Date(date), 'd MMMM yyyy')
    const capitalizedMonth = formattedDate.replace(/(^|\s)(\p{Ll})/gu, change => change.toUpperCase())

    return capitalizedMonth
}
