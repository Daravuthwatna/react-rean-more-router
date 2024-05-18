import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Error, Home, Privacy, Terms, Accessibility } from "./Pages"
import RootLayout from "./Layout/RootLayout"

import SerivceLayout from "./Layout/Services/ServiceLayout"
import ProductLayout from "./Layout/Product/ProductLayout"
import UserLayout from "./Layout/User/UserLayout" 

import UserError from "./Pages/User/UserError"
import User, { userLoader } from "./Pages/User/User"
import UserDetaill, {userDetaillLoader} from "./Pages/User/UserDetaill"
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "/Service",
          element: <SerivceLayout/>,
          children: [
            {
              path: "Clean",
              // index: true,
              element: <p>Clean...</p>
            },
            {
              path: "Sales",
              element: <p>Sales...</p>
            },
            {
              path: "Buy",
              element: <p>Buy...</p>
            },
          ]
        },
        {
          path: "/Product",
          element: <ProductLayout/>,
          children: [
            {
              path: "Nike",
              element: <p>Nike...</p>
            },
            {
              path: "Addias",
              element: <p>Addias...</p>
            },
            {
              path: "Vans",
              element: <p>Vans...</p>
            }
          ]
        },
        {
          path: "User",
          element: <UserLayout/>,
          children: [
            {
              index: true,
              element: <User/>,
              loader: userLoader,
            },
            {
              path: ":id",
              element: <UserDetaill/>,
              errorElement: <UserError/>,
              loader: userDetaillLoader
            }
          ]
        },
        {
          path: "/Privacy",
          element: <Privacy/>
        },
        {
          path: "/Terms",
          element: <Terms/>
        },
        {
          path: "/Accessibility",
          element: <Accessibility/>
        },
      ],
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App