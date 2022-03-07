import styles from '../styles/SideMenu.module.css'
import { FaTimes } from 'react-icons/fa'
import Button from '../components/button'

const SideMenu = ({ state, setState }) => {
    return (
        <div className={`${styles.layout}`}>
            <div className={`${styles['layout__menu']}`}>
                <FaTimes onClick={() => setState(!state)} className={`${styles['layout__menu__close']}`} size={20} />
                <div className={`${styles['layout__menu__wallet']}`}>
                    <Button onClick={() => console.log('Sign in with moralis')} color='primary' text='Wallet Sign in' type='button' />
                </div>
                <div className={`${styles['layout__menu__signin']}`}>
                    <Button onClick={() => console.log('Go to sign in page')} color='secondary' text='Email Sign in' type='button' />
                </div>
                <div className={`${styles['layout__menu__signup']}`}>
                    <Button onClick={() => console.log('Go to registration page')} color='secondary-outline' text='Email Registration' type='button' />
                </div>
            </div>
        </div>
    )
}

export default SideMenu