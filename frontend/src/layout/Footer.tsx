import { BsFillMicFill } from "react-icons/bs"
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import NavItem from "../components/shared/NavItem"

const Footer = () => {
  return (
    <footer className="">
      <div className="px-5 pt-16 lg:px-24 lg:pt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-10">
          <div className="">
            <div className="flex gap-1 items-center">
              <BsFillMicFill className="text-3xl text-secondary" />
              <p className="text-primary text-3xl font-poppins shadow-sm">Podverse</p>
            </div>
            <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim arcu cursus tincidunt</p>
            <div className="flex gap-5 pt-6 text-xl">
              <FaInstagram className="hover:text-secondary cursor-pointer" />
              <FaFacebookF className="hover:text-secondary cursor-pointer" />
              <FaSquareXTwitter className="hover:text-secondary cursor-pointer" />
              <FaLinkedin className="hover:text-secondary cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="font-poppins font-semibold text-lg text-primary">Company</p>
            <ul className="space-y-4">
              <li><NavItem title="Home" /></li>
              <li><NavItem title="Episode" /></li>
              <li><NavItem title="Contact Us" /></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="font-poppins font-semibold text-lg text-primary">Popular Category</p>
            <ul className="space-y-4">
              <li><NavItem title="Self Growth" /></li>
              <li><NavItem title="Fashion" /></li>
              <li><NavItem title="Technology" /></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="font-poppins font-semibold text-lg text-primary">Contact</p>
            <ul className="space-y-4">
              <li><NavItem title="9875489765" /></li>
              <li><NavItem title="podverse@mail.com" /></li>
              <li>2912 Meadowbrook Road, Los Angeles, CA 90017</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="lg:px-24 px-5 py-10 flex flex-col md:flex-row items-center justify-between text-lg">
        <p>© All rights reserved. <span className="text-secondary font-semibold">Podverse.</span></p>
        <p>🔥 Made by <a href="https://dipenboyaju.vercel.app/" target="_blank" className="text-secondary font-semibold">Dipen Boyaju 🔥</a></p>
      </div>
    </footer>
  )
}
export default Footer