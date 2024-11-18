import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import Episode from "./pages/Episode"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/episode", element: <Episode /> },
        { path: "/contactus", element: <ContactUs /> }
      ]
    }
  ])
  return (
    <div><RouterProvider router={router} /></div>
  )
}
export default App