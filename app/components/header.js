import styles from '../styles/Header.module.css'
import { FcRating } from 'react-icons/fc'

const Header = ({ }) => {
    return (
        <div className={`${styles.layout}`}>
            <FcRating className={`${styles['layout__logo']}`} />
            <div className={`${styles['layout__auth']}`}>
                <div className={`${styles['layout__auth__wallet']}`}>Wallet Sign in</div>
                <div className={`${styles['layout__auth__signin']}`}>Email Sign in</div>
                <div className={`${styles['layout__auth__signup']}`}>Email Sign up</div>
            </div>
        </div>
    )
}

export default Header
