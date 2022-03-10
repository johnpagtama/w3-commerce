import styles from '../styles/Registration.module.css'
import Button from '../components/button'

const Registration = () => {
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
                <div className={`${styles['layout__form__password__confirm']}`}>
                    <input className={`${styles['layout__form__password__confirm__input']}`} type='text' placeholder='Confirm Password' />
                    <span className={`${styles['layout__form__password__confirm__focus__border']}`}></span>
                </div>
                <div className={`${styles['layout__form__registration']}`}>
                    <p className={`${styles['layout__form__registration__link']}`}>
                        Have an account? <a href='/login'>Sign In</a>
                    </p>
                </div>
                <div className={`${styles['layout__form__register']}`}>
                    <Button onClick={() => console.log('Signing up')} color='primary' text='Register' width='25rem' type='button' />
                </div>
            </form>
        </div>
    )
}

export default Registration