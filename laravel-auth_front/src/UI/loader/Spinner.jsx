import styles from './spinner.module.css'

const Spinner = ({ size, black }) => {
    const finishedSize = { width: size, height: size }

    return (
        <div
            className={`${styles.spinner} ${black ? styles.blackBorder : ''}`}
            style={{
                width: `${finishedSize.width}px`,
                height: `${finishedSize.height}px`,
            }}></div>
    )
}

export default Spinner
