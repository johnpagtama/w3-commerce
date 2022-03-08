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
                    <Button variant='link' color='secondary-link' link='login' text='Email Sign in' />
                </div>
                <div className={`${styles['layout__menu__signup']}`}>
                    <Button variant='link' color='secondary-link-outline' link='registration' text='Email Registration' />
                </div>
            </div>
        </div>
    )
}

export default SideMenu