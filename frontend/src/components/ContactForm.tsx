import { useState } from "react"
import NavItem from "./shared/NavItem"

interface FormData {
  firstname: string
  lastname: string
  email: string
  tel: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    tel: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <h3 className="font-poppins text-4xl font-semibold">Contact Us</h3>
      <form action="" className="space-y-5 pt-10">
        <div className="flex gap-4 w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-primary">First Name</label>
            <input type="text" name="firstname" className="border border-gray-300 p-3 rounded-md mt-2 w-full placeholder:text-sm pl-4 focus:outline-none focus:border-secondary" placeholder="First Name" onChange={handleChange} value={formData.firstname} />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-primary">Last Name</label>
            <input type="text" name="lastname" className="border border-gray-300 p-3 rounded-md mt-2 w-full placeholder:text-sm pl-4 focus:outline-none focus:border-secondary" placeholder="First Name" onChange={handleChange} value={formData.lastname} />
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-primary">Email</label>
            <input type="email" name="email" className="border border-gray-300 p-3 rounded-md mt-2 w-full placeholder:text-sm pl-4 focus:outline-none focus:border-secondary" placeholder="Email" onChange={handleChange} value={formData.email} />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-primary">Phone Number</label>
            <input type="tel" name="tel" className="border border-gray-300 p-3 rounded-md mt-2 w-full placeholder:text-sm pl-4 focus:outline-none focus:border-secondary" placeholder="Phone Number" onChange={handleChange} value={formData.tel} />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-primary">Message</label>
          <textarea className="border border-gray-300 p-3 rounded-md mt-2 w-full placeholder:text-sm pl-4 h-36 focus:outline-none focus:border-secondary" placeholder="Write your message" name="message" onChange={handleChange} value={formData.message} />
        </div>
        <div className="w-full pt-3">
          <button className="bg-gradient-to-tr from-tertiary to-secondary text-white whitespace-nowrap rounded-lg flex items-center justify-center h-13 mx-0 px-6 py-3 font-poppins text-base font-medium leading-[1.62] gap-2 cursor-pointer w-full">
            <NavItem title="Submit" />
          </button>
        </div>
      </form>
    </div>
  )
}
export default ContactForm