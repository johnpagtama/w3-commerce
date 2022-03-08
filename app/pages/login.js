import styles from '../styles/Login.module.css'
import Button from '../components/button'

const Login = () => {
    return (
        <div className={`${styles['layout']}`}>
            <form className={`${styles['layout__form']}`} action=''>
                <div className={`${styles['layout__form__email']}`}>
                    <input type='text' placeholder='Email' />
                </div>
                <div className={`${styles['layout__form__password']}`}>
                    <input type='text' placeholder='Password' />
                </div>
                <div className={`${styles['layout__form__registration']}`}>
                    <p className={`${styles['layout__form__registration__link']}`}>
                        New User? <a href='/registration'>Sign Up</a>
                    </p>
                </div>
                <div className={`${styles['layout__form__signin']}`}>
                    <Button onClick={() => console.log('Logging in')} color='primary' text='Login' type='button' />
                </div>
            </form>
        </div>
    )
}

export default Login