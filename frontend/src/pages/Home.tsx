import Hero from "../components/Hero"
import herobg from '../assets/images/hero.svg'
import heroimg1 from '../assets/images/heroimg1.webp'
import heroimg2 from '../assets/images/heroimg2.webp'
import heroimg3 from '../assets/images/heroimg3.webp'
import videoSrc from '../assets/images/video.mp4'

const Home = () => {
  return (
    <div>
      <Hero bg={herobg} hero1={heroimg1} hero2={heroimg2} hero3={heroimg3} videoSrc={videoSrc} />
    </div>
  )
}
export default Home