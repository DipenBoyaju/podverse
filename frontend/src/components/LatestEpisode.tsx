import EpisodeCard from "./shared/EpisodeCard"
import img1 from "../assets/images/ep1.webp"
import img2 from "../assets/images/ep2.webp"
import img3 from "../assets/images/ep3.webp"
import img4 from "../assets/images/ep4.webp"
import img5 from "../assets/images/ep5.webp"
import img6 from "../assets/images/ep6.webp"
import SolidButton from "./shared/SolidButton"

const LatestEpisode = () => {
  return (
    <section className="x-5 px-5 py-16 lg:p-24 space-y-10">
      <div className="font-poppins text-center space-y-5">
        <p className="uppercase text-[20px] text-secondary font-[600]">Most popular CatEgory</p>
        <h2 className="text-3xl md:text-[44px] font-semibold leading-snug text-primary">All of our latest episodes</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-start gap-y-8">
        <EpisodeCard image={img1} category="Fashion" title="Ep 6: Data-driven marketing and sales with Dana White" date="September 4, 2024" time="30min" />
        <EpisodeCard image={img2} category="Fashion" title="Ep 5: Growing your social media presence" date="September 4, 2024" time="27min" />
        <EpisodeCard image={img3} category="Fashion" title="Ep 4: How John went from employee to CEO in 8 weeks" date="September 4, 2024" time="40min" />
        <EpisodeCard image={img4} category="Technology" title="Ep 3: Should I raise money for my startup, or not?" date="September 4, 2024" time="45min" />
        <EpisodeCard image={img5} category="Fashion" title="Ep 2: Getting the first 100 customers for your business" date="September 4, 2024" time="20min" />
        <EpisodeCard image={img6} category="Technology" title="Ep 1: How to build a world-class business brand" date="September 4, 2024" time="16min" />
      </div>
      <div className="flex justify-center pt-8">
        <SolidButton title="View All Episodes" />
      </div>
    </section>
  )
}
export default LatestEpisode