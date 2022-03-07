import styles from '../styles/Button.module.css'

const Button = ({ onClick, variant, color, type = 'button', text }) => {
    return (
        <button onClick={onClick} className={`${styles['base']} ${styles[variant]} ${styles[color]}`} type={type}>{text}</button>
    )
}

export default Button