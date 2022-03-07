import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Slider from '../components/slider'

const Home = () => {
  // Use later for popular items component
  // [...new Set([...new Array(5).fill(null).map(a => a = Math.floor(Math.random() * 21))])]

  return (
    <>
      <Header />
      <Slider category={`electronics`} />
      <Slider category={`women's clothing`} />
      <Slider category={`men's clothing`} />
      <Slider category={`jewelery`} />
    </>
  )
}

export default Home
