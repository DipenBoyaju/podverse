import AvailableCard from "./shared/AvailableCard"
import apple from '../assets/images/apple.svg'
import google from '../assets/images/googlee.svg'
import spotify from '../assets/images/spotify.svg'
import youtube from '../assets/images/youtube.svg'
import cloud from '../assets/images/cloud.svg'

const Available = () => {
  return (
    <section className="w-full shadow-xl px-8 py-6 rounded-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-white gap-5">
      <AvailableCard image={apple} title="Apple Podcast" />
      <AvailableCard image={google} title="Google Podcast" />
      <AvailableCard image={spotify} title="Spotify" />
      <AvailableCard image={youtube} title="Youtube" />
      <AvailableCard image={cloud} title="Sound Cloud" />
    </section>
  )
}
export default Available