import EpisodeCard from "../components/shared/EpisodeCard"
import Notify from "../components/Notify"
import noty1 from '../assets/images/noty1.webp'
import noty2 from '../assets/images/noty2.webp'
import herobg from '../assets/images/hero.svg'
import { useNavigate } from "react-router-dom"
import img1 from "../assets/images/ep1.webp"
import img2 from "../assets/images/ep2.webp"
import img3 from "../assets/images/ep3.webp"
import bg from '../assets/images/hero.svg'
import ep1 from '../assets/images/ep1.webp'
import { GoDotFill } from "react-icons/go"
import ep from '../assets/images/ep1-1.webp'
import { TbArrowRight } from "react-icons/tb";
import { FaPlayCircle } from "react-icons/fa";
import NavItem from "../components/shared/NavItem"
import { SiGooglepodcasts } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";

const SingleEpisode = () => {
  const nav = useNavigate()
  return (
    <div>
      <div className="w-full h-screen relative bg-primary" style={{ backgroundImage: `url(${bg})`, backgroundSize: '200vw', backgroundPosition: 'top' }}>
        <div className="mx-auto h-full pt-36 lg:pt-48 text-white grid lg:grid-cols-7 gap-16 lg:px-24 px-5">
          <div className="col-span-4">
            <p className="border border-white rounded-full p-2 w-fit px-3 text-sm">Fashion</p>
            <h1 className='font-poppins text-[40px] leading-tight lg:text-[54px] font-semibold lg:leading-[80px]'>Ep 6: Data-driven marketing and sales with Dana White</h1>
            <div className="text-white flex gap-4 items-center text-sm pt-10">
              <p>By iHeartPodcasts</p>
              <GoDotFill className="text-sm" />
              <p>30min</p>
              <GoDotFill className="text-sm" />
              <p>Episode 06</p>
            </div>
          </div>
          <div className="col-span-3 absolute rounded-xl overflow-hidden right-24 h-[85vh] w-[35vw]">
            <div className="h-full">
              <img src={ep1} alt="" className=" object-left rounded-lg h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-24 px-5 py-5">
        <div className="p-4 shadow-md flex justify-between items-center w-[45vw] rounded-lg">
          <div className="">
            <button className="bg-gradient-to-tr from-tertiary to-secondary text-white whitespace-nowrap rounded-full flex items-center justify-center h-13 mx-0 px-6 py-3 font-poppins text-base font-medium leading-[1.62] gap-2 cursor-pointer">
              <FaPlayCircle className="text-xl" />
              <NavItem title="Start Listening" />
            </button>
          </div>
          <div className="border-b text-primary border-primary pb-3 flex items-center gap-8">
            <NavItem title="Read the transcript" />
            <TbArrowRight className=" text-2xl" />
          </div>
          <div className=" text-primary flex items-center gap-2">
            <div className=" bg-zinc-200 p-2 rounded-full">
              <SiGooglepodcasts className="text-xl" />
            </div>
            <div className=" bg-zinc-200 p-2 rounded-full">
              <FaSpotify className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 lg:px-24 px-5 py-20 gap-20">
        <div className="h-fit sticky top-10">
          <p className="font-poppins font-semibold text-4xl">Technology Is Bound To Make An Impact In Your Business Business</p>
        </div>
        <div className="col-span-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper molestie ligula, sit amet rutrum augue luctus ultricies. Mauris justo leo, consectetur at pretium nec, laoreet et ligula. Proin sit amet diam eu libero eleifend pharetra eu quis lacus. Praesent tempus tortor convallis efficitur placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec quis sollicitudin magna. Vestibulum vel urna vel magna ultrices ullamcorper et ut diam.<br /><br />

            Vivamus finibus augue vel tristique interdum. Sed dolor turpis, tincidunt sed mi in, consectetur ullamcorper erat. In venenatis lacus augue, nec facilisis ex placerat id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vestibulum est dolor, egestas ultricies nibh aliquam eget. Nulla porta tellus nec urna hendrerit, id rutrum neque fringilla. Maecenas placerat, urna ac venenatis pulvinar, sapien tortor consectetur justo, vel mollis lectus neque vitae leo.<br /><br />

            Etiam aliquet massa nec odio malesuada efficitur. Cras aliquet metus et eros ultricies commodo. Etiam malesuada semper consequat. In lobortis ut mauris sed placerat. Phasellus non nunc non augue fermentum aliquet quis sed nisl. Duis tincidunt ligula sed sem consequat, a elementum sem lobortis. In nibh ex, consequat eu hendrerit in, eleifend quis dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a iaculis nisi. Integer consequat consequat nulla, tincidunt porta dolor eleifend at.<br /><br />

            Aliquam commodo mauris id venenatis elementum. Cras maximus eu dui ac efficitur. Duis porta laoreet leo. Mauris elit ante, egestas quis purus volutpat, malesuada luctus urna. Nunc cursus lorem sapien, id semper mi blandit quis. Nam mattis blandit faucibus. Fusce fermentum efficitur augue vitae laoreet. Proin vel arcu vitae mi tristique fermentum. Proin dignissim mollis interdum.</p>
          <img src={ep} alt="" className="w-full rounded-xl my-6" />
        </div>
      </div>
      <div className="px-5 py-16 lg:p-24 space-y-10 bg-[#F7F7F7]">
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