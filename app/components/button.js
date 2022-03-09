import styles from '../styles/Button.module.css'
import React from 'react'

const Button = React.forwardRef(({ onClick, variant, color, type = 'button', text, link = '/', width = '11rem' }, ref) => {
    if (variant !== 'link') {
        return (
            <button ref={ref} onClick={onClick} style={{ 'width': `${width}` }} className={`${styles['base']} ${styles[variant]} ${styles[color]}`} type={type}>{text}</button>
        )
    } else {
        return (
            <a href={link} ref={ref} className={`${styles['base-link']} ${styles[variant]} ${styles[color]}`}>{text}</a>
        )
    }
})

export default Button