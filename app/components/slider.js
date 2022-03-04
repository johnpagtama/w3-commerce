import styles from '../styles/Slider.module.css'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Slider = ({ category }) => {
    const [products, setProducts] = useState([])
    const slider = useRef(null)

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

    const slideLeft = () => slider.current.scrollLeft -= 325

    const slideRight = () => slider.current.scrollLeft += 325

    return (
        <div id={styles['main-slider-container']}>
            {(() => {
                if (products.filter((a) => a.category === category).length > 4) {
                    return <MdChevronLeft onClick={slideLeft} className={`${styles['slider-icon']} ${styles.left}`} size={40} />
                }
            })()}

            <div ref={slider} className={styles['slider']}>
                {
                    products.filter((a) => a.category === category).map((a) => {
                        return (
                            <div key={a.id} className={`${styles['slider-card']}`}>
                                <div className={`${styles['slider-card-image']}`} style={{ backgroundImage: `url(${a.image})` }}></div>
                            </div>
                        )
                    })
                }
            </div>

            {(() => {
                if (products.filter((a) => a.category === category).length > 4) {
                    return <MdChevronRight onClick={slideRight} className={`${styles['slider-icon']} ${styles.right}`} size={40} />
                }
            })()}
        </div>
    )
}

export default Slider
