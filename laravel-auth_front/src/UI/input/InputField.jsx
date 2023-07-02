import styles from './input.module.css'

const InputField = ({ value, setValue, placeholder, type, className, required, onChange, name, isError }) => {
    return (
        <div className={styles.wrapper}>
            <input
                className={`${styles.inputField} ${isError ? styles.error : ''} ${className ? className : ''}`}
                type={type ? type : 'text'}
                value={value}
                onChange={onChange ? onChange : (e) => setValue(e.target.value)}
                placeholder={placeholder}
                required={required ? true : false}
                name={name}
                
            />
        </div>
    )
}

export default InputField