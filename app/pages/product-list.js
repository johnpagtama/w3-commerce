import styles from '../styles/ProductList.module.css'
import Header from '../components/header'

const ProductList = () => {
    return (
        <>
            <Header />
            <h1 className={`${styles['color']}`}>Product List</h1>
        </>
    )
}

export default ProductList