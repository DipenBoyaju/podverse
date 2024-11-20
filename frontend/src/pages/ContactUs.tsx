import Notify from "../components/Notify"
import herobg from '../assets/images/hero.svg'
import noty1 from '../assets/images/noty1.webp'
import noty2 from '../assets/images/noty2.webp'
import ContactForm from "../components/ContactForm"
import contactimg from '../assets/images/contact.webp'
import HelpStage from "../components/HelpStage"

const ContactUs = () => {
  return (
    <div>
      <div className="h-full w-full bg-primary" style={{ backgroundImage: `url(${herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="mx-auto h-full top-28 lg:pt-40 text-white text-center pt-28 pb-14 lg:pb-64">
          <h1 className='font-poppins text-[40px] leading-tight lg:text-[54px] font-semibold lg:leading-[80px]'>We are here to help</h1>
          <p className="pt-6 w-[55vw] mx-auto">Wave goodbye to tedious reports. Our new project management dashboards are easy to build and use, boost visibility, and offer instant actionable insights.</p>
        </div>
      </div>
      <div className="px-5 py-16 lg:p-24 -mt-72">
        <div className="bg-white shadow-2xl w-full rounded-2xl p-10 grid md:grid-cols-2 gap-20">
          <div className="">
            <img src={contactimg} alt="" className="rounded-xl w-full" />
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
      <HelpStage />
      <Notify bg={herobg} noty1={noty1} noty2={noty2} />
    </div>
  )
}
export default ContactUs