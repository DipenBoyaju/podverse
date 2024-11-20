import { useNavigate } from "react-router-dom"
import NavItem from "./NavItem"

type Props = {
  title: string
  icon?: string
  link?: string
}

const SolidButton = ({ title, icon, link }: Props) => {
  const nav = useNavigate()
  const handleLink = () => {
    if (link?.startsWith("#")) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      nav(`${link}`)
    }
  };
  return (
    <button className="bg-gradient-to-tr from-tertiary to-secondary text-white whitespace-nowrap rounded-lg flex items-center justify-center h-13 mx-0 px-6 py-3 font-poppins text-base font-medium leading-[1.62] gap-2 cursor-pointer" onClick={handleLink}>
      <img src={icon} alt="" /><NavItem title={title} />
    </button>

  )
}
export default SolidButton