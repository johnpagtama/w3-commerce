import styles from '../styles/Header.module.css'
import { FcRating } from 'react-icons/fc'
import { IoCart } from 'react-icons/io5'
import Button from '../components/button'

const Header = ({ }) => {
    return (
        <div className={`${styles.layout}`}>
            <FcRating className={`${styles['layout__logo']}`} size={50} />
            <IoCart className={`${styles['layout__cart']}`} size={30} />
            <div className={`${styles['layout__auth']}`}>
                <div className={`${styles['layout__auth__wallet']}`}>
                    <Button color='primary' text='Wallet Sign in' />
                </div>
                <div className={`${styles['layout__auth__signin']}`}>
                    <Button color='secondary' text='Email Sign in' />
                </div>
                <div className={`${styles['layout__auth__signup']}`}>
                    <Button color='secondary-outline' text='Email Sign up' />
                </div>
            </div>
        </div>
    )
}

export default Header
