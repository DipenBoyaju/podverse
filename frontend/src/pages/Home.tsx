import Hero from "../components/Hero"
import herobg from '../assets/images/hero.svg'
import heroimg1 from '../assets/images/heroimg1.webp'
import heroimg2 from '../assets/images/heroimg2.webp'
import heroimg3 from '../assets/images/heroimg3.webp'
import videoSrc from '../assets/images/video.mp4'
import Category from "../components/Category"
import About from "../components/About"
import about1 from '../assets/images/about1.webp'
import about2 from '../assets/images/about2.webp'
import LatestEpisode from "../components/LatestEpisode"
import Testimonial from "../components/Testimonial"

const Home = () => {
  return (
    <div>
      <Hero bg={herobg} hero1={heroimg1} hero2={heroimg2} hero3={heroimg3} videoSrc={videoSrc} />
      <Category />
      <About about1={about1} about2={about2} />
      <LatestEpisode />
      <Testimonial bg={herobg} />
    </div>
  )
}
export default Home