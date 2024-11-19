import NavItem from "./NavItem"

type Props = {
  title: string
  icon?: string
}

const RoundedButton = ({ title, icon }: Props) => {
  return (
    <button className="bg-gradient-to-tr from-tertiary to-secondary text-white whitespace-nowrap rounded-full flex items-center justify-center h-13 mx-0 px-6 py-3 font-poppins text-base font-medium leading-[1.62] gap-2 cursor-pointer">
      <img src={icon} alt="" /><NavItem title={title} />
    </button>
  )
}
export default RoundedButton