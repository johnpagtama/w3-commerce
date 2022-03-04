import styles from '../styles/Home.module.css'
import Slider from '../components/slider'

const Home = () => {

  return (
    <>
      <Slider category={`electronics`} />
      <Slider category={`women's clothing`} />
      <Slider category={`men's clothing`} />
      <Slider category={`jewelery`} />
    </>
  )
}

export default Home
