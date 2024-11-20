import SolidButton from "./shared/SolidButton"
import icon from '../assets/images/staricon.svg'
import icon1 from '../assets/images/arrowicon.svg'
import BorderButton from "./shared/BorderButton"

type Props = {
  bg: string
  hero1: string
  hero2: string
  hero3: string
  videoSrc: string
}
const Hero = ({ bg, hero1, hero2, hero3, videoSrc }: Props) => {
  return (
    <div className='w-full h-full bg-primary' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="pb-20">
        <div className="w-full h-full relative object-cover">
          <div className="mx-auto h-full top-28 lg:pt-40 text-white grid lg:grid-cols-2 gap-10 lg:px-24 px-5">
            <div className="flex flex-col">
              <h1 className='font-poppins text-[40px] leading-tight lg:text-[54px] font-semibold lg:leading-[80px]'>Launch your podcast website with Castifye.</h1>
              <p className="font-poppins pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu urna, quam adipiscing eu tincidunt.</p>
              <div className="mt-10 flex gap-4">
                <SolidButton title="Subscribe" icon={icon} link="#subscribe" />
                <BorderButton title="Latest Episode" icon={icon1} link="/episode" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="">
                <img src={hero1} alt="" className="rounded-md" />
                <div className="relative">
                  <img src={hero3} alt="" className="absolute w-auto left-11 top-6" />
                </div>
              </div>
              <div className="w-full flex flex-col gap-6">
                <div className="w-full  h-72 overflow-hidden rounded-md object-cover object-center">
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
                <div className="">
                  <img src={hero2} alt="" className="rounded-md w-56 place-self-end" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero