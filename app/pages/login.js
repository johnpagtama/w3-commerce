import styles from '../styles/Login.module.css'
import Button from '../components/button'

const Login = () => {
    return (
        <div className={`${styles['layout']}`}>
            <form className={`${styles['layout__form']}`} action=''>
                <div className={`${styles['layout__form__email']}`}>
                    <input className={`${styles['layout__form__email__input']}`} type='text' placeholder='Email' />
                    <span className={`${styles['layout__form__email__focus__border']}`}></span>
                </div>
                <div className={`${styles['layout__form__password']}`}>
                    <input className={`${styles['layout__form__password__input']}`} type='text' placeholder='Password' />
                    <span className={`${styles['layout__form__password__focus__border']}`}></span>
                </div>
                <div className={`${styles['layout__form__registration']}`}>
                    <p className={`${styles['layout__form__registration__link']}`}>
                        New User? <a href='/registration'>Sign Up</a>
                    </p>
                </div>
                <div className={`${styles['layout__form__signin']}`}>
                    <Button onClick={() => console.log('Logging in')} color='primary' text='Login' width='25rem' type='button' />
                </div>
            </form>
        </div>
    )
}

export default Login