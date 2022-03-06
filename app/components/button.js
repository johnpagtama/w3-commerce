import styles from '../styles/Button.module.css'

const Button = ({ variant, color, type = 'button', text }) => {
    return (
        <button className={`${styles['base']} ${styles[variant]} ${styles[color]}`} type={type}>{text}</button>
    )
}

export default Button