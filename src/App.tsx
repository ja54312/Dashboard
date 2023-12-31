//Pages
import Home from "./pages/home/Home"
import Users from "./pages/users/User"
import User from "./pages/user/User"
import Products from "./pages/products/Produtcts"
import Product from "./pages/product/Product"
//Components
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"
import Menu from "./components/menu/Menu"
import Login from "./pages/login/Login"
//Styles
import './styles/global.scss'
//Router
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App