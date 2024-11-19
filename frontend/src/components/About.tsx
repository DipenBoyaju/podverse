import SolidButton from "./shared/SolidButton"
import icon from '../assets/images/staricon.svg'

type Props = {
  about1: string
  about2: string
}

const About = ({ about1, about2 }: Props) => {
  return (
    <section className="x-5 px-5 py-16 lg:p-24 space-y-10 bg-[#F7F7F7] relative">
      <div className="font-poppins space-y-5">
        <p className="uppercase text-[20px] text-secondary font-[600]">About our show</p>
        <h2 className="text-3xl md:text-[44px] font-semibold leading-snug text-primary">Awareness and Presence in <br />Everyday Moments</h2>
      </div>
      <div className="grid md:grid-cols-8 gap-20">
        <div className="md:col-span-5">
          <div className="flex flex-row w-full gap-6">
            <div className="w-2/3 overflow-hidden rounded-lg">
              <img src={about1} alt="" />
            </div>
            <div className="w-1/3 overflow-hidden rounded-lg " >
              <img src={about2} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="font-inter pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim arcu cursus tincidunt et odio enim allium. Gravida augue arcu duis turpis nisl. Sed tellus quis nisl, est ridiculus. Gravida faucibus in ut hendrerit. Eget sed sit.</p>
          <SolidButton title="Subscribe" icon={icon} />
        </div>
      </div>
      <div className="md:absolute bg-white shadow-2xl p-5 md:p-8 rounded-lg z-10 left-0 md:left-[35%] bottom-44">
        <div className="flex">
          <div className="text-center space-y-5 w-full pr-10">
            <p className="font-poppins md:text-5xl text-3xl text-primary font-semibold">06</p>
            <p className="text-secondary">Studio</p>
          </div>
          <div className="text-center space-y-5 w-full border-l border-gray-300 px-10">
            <p className="font-poppins text-3xl md:text-5xl text-primary font-semibold">25</p>
            <p className="text-secondary md:whitespace-nowrap">Years of Experience</p>
          </div>
          <div className="text-center space-y-5 w-full border-l border-gray-300 px-10">
            <p className="font-poppins text-3xl md:text-5xltext-primary font-semibold">12</p>
            <p className="text-secondary">Speakers</p>
          </div>
          <div className="text-center space-y-5 w-full  border-l border-gray-300 pl-10">
            <p className="font-poppins text-3xl md:text-5xl text-primary font-semibold">1M+</p>
            <p className="text-secondary md:whitespace-nowrap">Happy Listener</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About