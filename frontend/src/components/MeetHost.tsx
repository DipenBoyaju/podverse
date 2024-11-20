import SolidButton from "./shared/SolidButton"
import staricon from '../assets/images/staricon.svg'
import arrowicon from '../assets/images/darkicon.svg'
import BorderButton from "./shared/BorderButton"
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

type Props = {
  hero1: string
  videoSrc: string
}
const MeetHost = ({ hero1, videoSrc }: Props) => {
  return (
    <section className="px-5 py-16 lg:p-24 space-y-10 relative">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="">
          <div className="font-poppins space-y-5">
            <p className="uppercase text-[20px] text-secondary font-[600]">About the host</p>
            <h2 className="text-3xl md:text-[44px] font-semibold leading-snug text-primary">Meet out host</h2>
          </div>
          <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim arcu cursus tincidunt et odio enim aliquam. Gravida augue arcu duis turpis nisl. Sed tellus quis nisl, est ridiculus. Gravida faucibus in ut hendrerit. Eget sed sit.</p><br />
          <p>Egestas pretium aenean pharetra magna ac placerat vestibulum. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum.</p>
          <div className="pt-6 flex gap-4">
            <SolidButton title="Subscribe" icon={staricon} />
            <BorderButton title="Latest Episode" icon={arrowicon} color="primary" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 relative">
          <div className="">
            <img src={hero1} alt="" className="rounded-md" />
            <div className="absolute left-24 mt-6 text-primary bg-white shadow-2xl p-6 rounded-lg space-y-2">
              <h3 className="font-semibold text-2xl font-poppins">John Carter</h3>
              <p>Enterepreneur & Podcaster</p>
              <div className="flex gap-5 text-xl">
                <FaInstagram className="hover:text-secondary cursor-pointer" />
                <FaFacebookF className="hover:text-secondary cursor-pointer" />
                <FaSquareXTwitter className="hover:text-secondary cursor-pointer" />
                <FaLinkedin className="hover:text-secondary cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="w-full overflow-hidden rounded-md object-cover object-center">
              <div className="object-center object-cover">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline className="object-center object-cover"
                >
                  <source src={videoSrc} className="object-center object-cover" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MeetHost