import styles from '../styles/ProductList.module.css'
import { FcImageFile } from "react-icons/fc";
import Header from '../components/header'

const ProductList = () => {
    let products = [
        {
            id: 1,
            name: 'Sugar',
            desc: 'Blossom',
            price: '1.00'
        },
        {
            id: 2,
            name: 'Spice',
            desc: 'Bubbles',
            price: '2.00'
        },
        {
            id: 3,
            name: 'Everything',
            desc: 'And',
            price: '3.00'
        },
        {
            id: 4,
            name: 'Nice',
            desc: 'Buttercup',
            price: '4.00'
        }]
    return (
        <>
            <Header />
            <div className={`${styles['layout']}`}>
                <aside className={`${styles['layout__category']}`}>
                    <h2>Category</h2>
                </aside>
                <main className={`${styles['layout__product__list']}`}>
                    {
                        products.map((a) => {
                            return (
                                <div className={`${styles['layout__product__list__card']}`} key={a.id}>
                                    <FcImageFile className={`${styles['layout__product__list__card__image']}`} size={50} />
                                    <div className={`${styles['layout__product__list__card__info']}`}>
                                        <h3 className={`${styles['layout__product__list__card__info__name']}`}>{a.name}</h3>
                                        <p className={`${styles['layout__product__list__card__info__desc']}`}>{a.desc}</p>
                                        <h4 className={`${styles['layout__product__list__card__info__price']}`}>{a.price}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </main>
            </div >
        </>
    )
}

export default ProductList