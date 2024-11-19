
type Props = {
  name: string
  role: string
  image: string
  review: string
}

const TestimonialCard = ({ name, role, image, review }: Props) => {
  return (
    <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm text-white">
      <div className="flex gap-2 items-center">
        <div className="rounded-full overflow-hidden size-12">
          <img src={image} alt="" />
        </div>
        <div className="">
          <p className="font-poppins">{name}</p>
          <p className="text-sm font-light">{role}</p>
        </div>
      </div>
      <p className="text-lg pt-6">
        {review}
      </p>
    </div>
  )
}
export default TestimonialCard