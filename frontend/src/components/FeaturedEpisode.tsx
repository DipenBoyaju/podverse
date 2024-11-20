import EpisodeCard from "./shared/EpisodeCard"
import img1 from "../assets/images/ep1.webp"
import img2 from "../assets/images/ep2.webp"

const FeaturedEpisode = () => {
  return (
    <section className="px-5 py-16 lg:p-24 space-y-10">
      <h2 className="text-3xl md:text-[50px] font-semibold leading-snug font-poppins text-primary">
        Featured Episode
      </h2>
      <div className="grid grid-cols-2 gap-5">
        <EpisodeCard image={img1} category="Fashion" title="Ep 6: Data-driven marketing and sales with Dana White" date="September 4, 2024" time="30min" />
        <EpisodeCard image={img2} category="Fashion" title="Ep 5: Growing your social media presence" date="September 4, 2024" time="27min" />
      </div>
    </section>
  )
}
export default FeaturedEpisode