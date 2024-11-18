import CategoryCard from "./shared/CategoryCard"
import cat1 from '../assets/images/cat1.webp'
import cat2 from '../assets/images/cat2.webp'
import cat3 from '../assets/images/cat3.webp'

const Category = () => {
  return (
    <section className="x-5 lg:p-24 space-y-10">
      <div className="font-poppins text-center space-y-5">
        <p className="uppercase text-lg text-secondary font-[600]">Most popular CatEgory</p>
        <h2 className="text-5xl font-semibold leading-snug">Get started with our featured <br />categories show.</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 items-center">
        <CategoryCard cat={cat1} title="Self Growth" />
        <CategoryCard cat={cat2} title="Fashion" />
        <CategoryCard cat={cat3} title="Technology" />
      </div>
    </section>
  )
}
export default Category