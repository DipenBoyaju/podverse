import Available from "../components/Available"
import CategoryTitle from "../components/shared/CategoryTitle"
import herobg from '../assets/images/hero.svg'
import EpisodeCard from "../components/shared/EpisodeCard"
import img4 from "../assets/images/ep4.webp"
import { useNavigate } from "react-router-dom"
import Notify from "../components/Notify"
import noty1 from '../assets/images/noty1.webp'
import noty2 from '../assets/images/noty2.webp'

const SingleCategory = () => {
  const nav = useNavigate()
  return (
    <div>
      <CategoryTitle image={herobg} title="Self Growth" sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna id arcu fringilla ultrices." />
      <div className="relative mx-5 lg:mx-24 mb-16">
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 z-50">
          <Available />
        </div>
      </div>
      <div className="px-5 py-16 lg:p-24 space-y-10">
        <h2 className="text-3xl md:text-[50px] font-semibold leading-snug font-poppins text-primary">
          Self Growth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="" onClick={() => nav('/episodes')}>
            <EpisodeCard image={img4} category="Technology" title="Ep 1: How to build a world-class business brand" date="September 4, 2024" time="16min" name="Rob Dial" />
          </div>
        </div>
      </div>
      <Notify bg={herobg} noty1={noty1} noty2={noty2} />
    </div>
  )
}
export default SingleCategory