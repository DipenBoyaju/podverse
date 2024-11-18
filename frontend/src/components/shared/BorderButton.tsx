import NavItem from "./NavItem"

type Props = {
  title: string
  icon?: string
}

const BorderButton = ({ title, icon }: Props) => {
  return (
    <button className="border border-white text-white whitespace-nowrap rounded-lg flex items-center justify-center h-13 mx-0 px-6 py-3 font-poppins text-base font-medium leading-[1.62] gap-2 cursor-pointer">
      <NavItem title={title} /><img src={icon} alt="" />
    </button>
  )
}
export default BorderButton