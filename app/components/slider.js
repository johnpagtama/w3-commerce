import styles from '../styles/Slider.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Slider = () => {
    const slides = [1, 2, 3, 4, 5]
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('https://fakestoreapi.com/products')
                console.log(res.data)
                setProducts(res.data)
                return res
            } catch (err) {
                console.error(err)
            }
        }
        getProducts()
    }, [])

    return (
        <div id={styles['main-slider-container']}>
            <button onClick={(e) => console.log(e)} className={`${styles['slider-icon']} ${styles.left}`}>
                <MdChevronLeft size={40} />
            </button>

            <div id={styles['slider']}>
                {
                    products.map((a) => {
                        if (a.category === 'men\'s clothing') {
                            return (
                                <div key={a.id} className={`${styles['slider-card']}`}>
                                    <div className={`${styles['slider-card-image']}`} style={{ backgroundImage: `url(${a.image})` }}></div>
                                </div>
                            )
                        }
                    })
                }
            </div>

            <button onClick={(e) => console.log(e)} className={`${styles['slider-icon']} ${styles.right}`}>
                <MdChevronRight size={40} />
            </button>
        </div>
    )
}

export default Slider
