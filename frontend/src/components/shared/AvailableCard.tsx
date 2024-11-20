type Props = {
  image: string
  title: string
}

const AvailableCard = ({ image, title }: Props) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="">
        <p className="text-gray-600 text-sm">Available on</p>
        <p className="text-primary">{title}</p>
      </div>
    </div>
  )
}
export default AvailableCard