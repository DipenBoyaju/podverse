
type Props = {
  cat: string
  title: string
}

const CategoryCard = ({ cat, title }: Props) => {
  return (
    <div className="w-full relative rounded-lg overflow-hidden group">
      <div className="w-full h-full bg-black/15 absolute"></div>
      <img src={cat} alt="" className="group-hover:scale-125 transition-all duration-1000 cursor-pointer" />
      <div className="flex justify-center">
        <p className="absolute z-10 text-white bottom-8 font-bold font-poppins text-lg md:text-3xl">{title}</p>
      </div>
    </div>
  )
}
export default CategoryCard