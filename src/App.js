import React, { useContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './components/Products/Products'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import Categories from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import NotFound from './components/NotFound/NotFound'
import Layout from './components/Layout/Layout'
import { tokenContext } from './Context/token'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Payment from './components/Payment/Payment'
import UserAllOrders from './components/UserAllOrders/UserAllOrders'
import Wishlist from './components/Wishlist/Wishlist'
import ForgetPass from './components/ForgetPass/ForgetPass'
import VerifyCode from './components/VerifyCode/VerifyCode'
import ResetPass from './components/ResetPass/ResetPass'



const routes = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { path: 'register', element: <Register /> },
      { path: 'forgetpass', element: <ForgetPass /> },
      { path: 'verifycode', element: <VerifyCode /> },
      { path: 'resetpassword', element: <ResetPass /> },
      { path: 'login', element: <Login /> },
      {
        path: 'home', element:
          <ProtectedRoutes>
            <Products />
          </ProtectedRoutes>
      },
      {
        path: '', element:
          <ProtectedRoutes>
            <Products />
          </ProtectedRoutes>
      },

      {
        path: 'cart', element:
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
      },
      {
        path: 'categories', element:
          <ProtectedRoutes>
            <Categories />
          </ProtectedRoutes>
      },
      {
        path: 'brands', element:
          <ProtectedRoutes>
            <Brands />
          </ProtectedRoutes>
      },
      {
        path: 'ProductDetails/:id', element:
          <ProtectedRoutes>
            <ProductDetails />
          </ProtectedRoutes>
      },
      {
        path: 'payment', element:
          <ProtectedRoutes>
            <Payment />
          </ProtectedRoutes>
      },
      {
        path: 'allorders', element:
          <ProtectedRoutes>
            <UserAllOrders />
          </ProtectedRoutes>
      },
      {
        path: 'wishlist', element:
          <ProtectedRoutes>
            <Wishlist />
          </ProtectedRoutes>
      },

      { path: '*', element: <NotFound /> },
    ]
  }
])



export default function App() {

  const { setToken, token } = useContext(tokenContext)

  useEffect(() => {
    if (localStorage.getItem("tkn") != null) {
      setToken(localStorage.getItem("tkn"))
    }
  }, [])



  return <RouterProvider router={routes}>

  </RouterProvider>
}