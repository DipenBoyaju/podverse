import { GoDotFill } from "react-icons/go";
import playicon from "../../assets/images/playicon.svg"
import RoundedButton from "./RoundedButton";

type Props = {
  image: string
  category: string
  title: string
  date: string
  time: string
}

const EpisodeCard = ({ image, category, title, date, time }: Props) => {
  return (
    <div className="flex flex-col gap-1 group cursor-pointer">
      <div className="rounded-md overflow-hidden relative">
        <img src={image} alt="" className="group-hover:scale-125 transition-all duration-1000" />
        <p className="absolute bottom-8 left-5 text-white">Rob Dial</p>
        <div className="absolute z-10 flex items-center justify-center top-36 opacity-0 w-full group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0">
          <RoundedButton title="Listen Now" icon={playicon} />
        </div>
      </div>
      <div className="border border-gray-300 py-2 px-4 rounded-full w-fit text-sm mt-2">
        {category}
      </div>
      <h3 className="font-poppins font-semibold text-lg">{title}</h3>
      <div className="text-[#707070] flex gap-4 items-center font-light">
        <p>{date}</p>
        <GoDotFill className="text-sm" />
        <p>{time}</p>
      </div>
    </div>
  )
}
export default EpisodeCard