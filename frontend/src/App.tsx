import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Episode from "./pages/Episode";
import SingleCategory from "./pages/SingleCategory";
import SingleEpisode from "./pages/SingleEpisode";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "/episode", element: <Episode /> },
          { path: "/contactus", element: <ContactUs /> },
          { path: "/cat", element: <SingleCategory /> },
          { path: "/episodes", element: <SingleEpisode /> }
        ]
      }
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      }
    }
  );

  return <RouterProvider router={router} />;
};

export default App;
