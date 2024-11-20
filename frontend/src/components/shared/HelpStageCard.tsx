type Props = {
  img: string
  title: string
  description: string
}

const HelpStageCard = ({ img, title, description }: Props) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-center">
      <div className="">
        <img src={img} alt="" />
      </div>
      <h4 className="text-2xl font-semibold text-primary">{title}</h4>
      <p className="text-gray-900">{description}</p>
    </div>
  )
}
export default HelpStageCard