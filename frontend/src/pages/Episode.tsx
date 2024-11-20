import Notify from "../components/Notify"
import herobg from '../assets/images/hero.svg'
import noty1 from '../assets/images/noty1.webp'
import noty2 from '../assets/images/noty2.webp'
import FeaturedEpisode from "../components/FeaturedEpisode"
import AllEpisodes from "../components/AllEpisodes"
import Available from "../components/Available"
import CategoryTitle from "../components/shared/CategoryTitle"

const Episode = () => {
  return (
    <div>
      <CategoryTitle image={herobg} title="Listen to the story behind <br />the headlines of today" sub="Wave goodbye to tedious reports. Our new project management dashboards are easy to build and use, boost visibility, and offer instant actionable insights." />
      <div className="relative mx-5 lg:mx-24 mb-16">
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 z-50">
          <Available />
        </div>
      </div>
      <FeaturedEpisode />
      <AllEpisodes />
      <Notify bg={herobg} noty1={noty1} noty2={noty2} />
    </div>
  )
}
export default Episode