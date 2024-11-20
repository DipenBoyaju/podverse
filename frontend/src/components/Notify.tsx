import SolidButton from "./shared/SolidButton"

type Props = {
  bg: string
  noty1: string
  noty2: string
}
const Notify = ({ bg, noty1, noty2 }: Props) => {
  return (
    <section id="subscribe" className="w-full h-full bg-primary" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="px-5 py-16 lg:p-24 lg:py-32 relative">
        <img src={noty1} alt="" className="absolute w-[22vw] left-20 -top-14 hidden lg:block" />
        <h2 className="text-3xl md:text-[44px] font-semibold leading-snug text-white text-center">Get notified every time we <br />post an new episode</h2>
        <p className="text-gray-300 py-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex gap-4 justify-center pt-4">
          <input type="text" placeholder="Your email Address" className="border border-gray-200 bg-transparent rounded-lg px-5 focus:outline-none focus:border-secondary placeholder:text-white" />
          <SolidButton title="Submit" />
        </div>
        <img src={noty2} alt="" className="absolute w-[18vw] right-20 -top-14 hidden lg:block" />
      </div>
    </section>
  )
}
export default Notify