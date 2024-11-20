import EpisodeCard from "../components/shared/EpisodeCard"
import Notify from "../components/Notify"
import noty1 from '../assets/images/noty1.webp'
import noty2 from '../assets/images/noty2.webp'
import herobg from '../assets/images/hero.svg'
import { useNavigate } from "react-router-dom"
import img1 from "../assets/images/ep1.webp"
import img2 from "../assets/images/ep2.webp"
import img3 from "../assets/images/ep3.webp"

const SingleEpisode = () => {
  const nav = useNavigate()
  return (
    <div>
      <div className="px-5 py-16 lg:p-24 space-y-10">
        <h2 className="text-3xl md:text-[50px] font-semibold leading-snug font-poppins text-primary">
          Most recent episodes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="" onClick={() => nav('/episodes')}>
            <EpisodeCard image={img1} category="Fashion" title="Ep 6: Data-driven marketing and sales with Dana White" date="September 4, 2024" time="30min" name="Rob Dial" />
          </div>

          <div className="" onClick={() => nav('/episodes')}>
            <EpisodeCard image={img2} category="Fashion" title="Ep 5: Growing your social media presence" date="September 4, 2024" time="27min" name="Rob Dial" />
          </div>

          <div className="" onClick={() => nav('/episodes')}>
            <EpisodeCard image={img3} category="Fashion" title="Ep 4: How John went from employee to CEO in 8 weeks" date="September 4, 2024" time="40min" name="Rob Dial" />
          </div>
        </div>
      </div>
      <Notify bg={herobg} noty1={noty1} noty2={noty2} />
    </div>
  )
}
export default SingleEpisode