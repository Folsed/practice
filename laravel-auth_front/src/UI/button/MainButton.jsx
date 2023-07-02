import { NavLink } from 'react-router-dom'
import styles from './button.module.css'
import Spinner from '../loader/Spinner'

const MainButton = ({ title, link, isLoading, onClick, type }) => {
    const ButtonComponent = link ? NavLink : 'button'
    const buttonProps = link ? { to: link } : { onClick: onClick, type: type }

    return (
        <ButtonComponent className={`${styles.button} ${isLoading ? styles.block : ''}`} {...buttonProps}>
            {isLoading ? <Spinner size={18} /> : title}
        </ButtonComponent>
    );
}

export default MainButton