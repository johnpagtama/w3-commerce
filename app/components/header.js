import styles from '../styles/Header.module.css'
import { FcRating } from 'react-icons/fc'
import { IoCart } from 'react-icons/io5'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import SideMenu from '../components/sideMenu'

const Header = () => {
    const [show, setShow] = useState(false)

    return (
        <header className={`${styles.layout}`}>
            <FcRating className={`${styles['layout__logo']}`} size={50} />
            <IoCart className={`${styles['layout__cart']}`} size={30} />
            <GiHamburgerMenu onClick={() => setShow(!show)} className={`${styles['layout__auth']}`} size={25} />
            {show ? <SideMenu state={show} setState={setShow} /> : null}
        </header>
    )

}

export default Header
