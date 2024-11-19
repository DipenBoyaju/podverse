import TestimonialCard from "./shared/TestimonialCard"
import tes1 from '../assets/images/tes1.webp'
import tes2 from '../assets/images/tes2.webp'
import tes3 from '../assets/images/tes3.webp'

const Testimonial = ({ bg }: string) => {
  return (
    <section className="px-5 py-16 lg:p-24 space-y-10 w-full bg-primary" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="font-poppins text-center space-y-5">
        <p className="uppercase text-[20px] text-secondary font-[600]">Testimonial</p>
        <h2 className="text-3xl md:text-[44px] font-semibold leading-snug text-white">What they're saying about us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start gap-y-8">
        <TestimonialCard name="
Darrell Steward" role="Small Business Owner" image={tes1} review="This podcast is a game-changer! The episodes are packed with actionable insights, and the hosts really know how to keep you engaged. I feel like I’m constantly learning something new." />
        <TestimonialCard name="
Marvin McKinney" role="Entrepreneur" image={tes2} review="I’ve been listening since day one, and it just keeps getting better! The production quality is top-notch, and I always walk away with fresh perspectives." />
        <TestimonialCard name="
Dianne Russell" role="Avid Listener" image={tes3} review="After testing out 20+ podcast hosting platforms and working with numerous clients setting up their hosting, Transistor.FM is the one I always recommend because of its unique features, accessibility and user interface." />
      </div>
    </section>
  )
}
export default Testimonial