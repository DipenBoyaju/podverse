type Props = {
  image: string
  title: string
  sub: string
}

const CategoryTitle = ({ image, title, sub }: Props) => {
  return (
    <section className="h-full w-full bg-primary z-10" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="mx-auto h-full top-28 lg:pt-40 text-white pt-28 pb-14 lg:pb-32 px-5 lg:px-24">
        <h1 className='font-poppins text-[40px] leading-tight lg:text-[54px] font-semibold lg:leading-[80px] w-[60vw]'>{title}</h1>
        <p className="pt-6 w-[55vw]">{sub}</p>
      </div>
    </section>
  )
}
export default CategoryTitle