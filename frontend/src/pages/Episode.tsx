import Notify from "../components/Notify"
import herobg from '../assets/images/hero.svg'
import noty1 from '../assets/images/noty1.webp'
import noty2 from '../assets/images/noty2.webp'

const Episode = () => {
  return (
    <div>
      <div className="h-full w-full bg-primary" style={{ backgroundImage: `url(${herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="mx-auto h-full top-28 lg:pt-40 text-white pt-28 pb-14 lg:pb-32 px-5 lg:px-24">
          <h1 className='font-poppins text-[40px] leading-tight lg:text-[54px] font-semibold lg:leading-[80px]'>Listen to the story behind <br />the headlines of today</h1>
          <p className="pt-6 w-[55vw]">Wave goodbye to tedious reports. Our new project management dashboards are easy to build and use, boost visibility, and offer instant actionable insights.</p>
        </div>
      </div>
      <Notify bg={herobg} noty1={noty1} noty2={noty2} />
    </div>
  )
}
export default Episode