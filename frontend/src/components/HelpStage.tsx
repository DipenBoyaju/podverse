import HelpStageCard from "./shared/HelpStageCard"
import img1 from "../assets/images/career.svg"
import img2 from "../assets/images/press.svg"
import img3 from "../assets/images/support.svg"

const HelpStage = () => {
  return (
    <section className="px-5 py-16 lg:p-24 space-y-10 bg-[#F7F7F7]">
      <div className="font-poppins text-center space-y-5">
        <h2 className="text-3xl md:text-[44px] font-semibold leading-snug text-primary">We help you at any stage</h2>
      </div>
      <div className="pt-10 pb-5 grid grid-cols-1 md:grid-cols-3 gap-12">
        <HelpStageCard img={img1} title="Careers" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit bibendum" />
        <HelpStageCard img={img2} title="Press Kit" description="Maecenas ut vulputate leo. Nullam id risus orci. Fusce rutrum tempus" />
        <HelpStageCard img={img3} title="Support" description="Maecenas ut vulputate leo. Nullam id risus orci. Fusce rutrum tempus" />
      </div>
    </section>
  )
}
export default HelpStage