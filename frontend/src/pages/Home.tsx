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
import MeetHost from "../components/MeetHost"
import Notify from "../components/Notify"
import noty1 from '../assets/images/noty1.webp'
import noty2 from '../assets/images/noty2.webp'
import FAQ from "../components/FAQ"
import Slider from "../components/Slider"
import slidimg from '../assets/images/slider.svg'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero bg={herobg} hero1={heroimg1} hero2={heroimg2} hero3={heroimg3} videoSrc={videoSrc} />
      <Category />
      <About about1={about1} about2={about2} />
      <LatestEpisode />
      <Testimonial bg={herobg} />
      <MeetHost hero1={heroimg1} videoSrc={videoSrc} />
      <Slider slidimg={slidimg} />
      <FAQ />
      <Notify bg={herobg} noty1={noty1} noty2={noty2} />
    </div>
  )
}
export default Home