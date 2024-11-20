import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";

export const data = [
  { title: "May we use Intone if we’re not a call center but have voice support?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. " },
  { title: "With what platforms can In Tone be integrated?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. " },
  { title: "Do you enhance accents of local languages but not only accents in English?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. " },
  { title: "Do you feature guest interviews on your show?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. " },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="px-5 py-16 lg:p-24 space-y-10 bg-[#F7F7F7]">
      <div className="font-poppins text-center space-y-5">
        <p className="uppercase text-[20px] text-secondary font-[600]">FAQ Section</p>
        <h2 className="text-3xl md:text-[44px] font-semibold leading-snug text-primary">Frequently Asked <br />Questions</h2>
      </div>
      <div className="lg:w-[65vw] mx-auto">
        {
          data?.map((item, index) => (
            <div key={index} className="">
              <div
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-6 bg-white mb-4 rounded-md flex flex-col justify-between"
              >
                <div className="flex justify-between items-center w-full cursor-pointer">
                  <span className="font-poppins text-lg font-semibold">{item.title}</span>
                  <span className="text-xl text-secondary">
                    {activeIndex === index ? (
                      <HiOutlineMinus />
                    ) : (
                      <HiOutlinePlus />
                    )}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className=" pt-4 bg-white transition-all duration-1000">
                    {item.content}
                  </div>
                )}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default FAQ