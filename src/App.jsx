import { useState } from "react";
import HomeScreen from "../pages/homescreen/HomeScreen";
import SingleProduct from "../pages/products/SingleProduct";
import ShopProduct from "../pages/shopProudct/ShopProduct";
import Navbar from "../components/navbar/Navbar";
import Authantication from "../pages/auth/Authantication";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import OrderPage from "../pages/orders/OrderPage";
import Checkout from "../pages/checkout/Checkout";
import Success from "../pages/success/Success";
import Cancel from "../pages/cancel/Cancel";
function App() {
  const [currentAuth, setCurrentAuth] = useState("");
  const Layout = () => {
    return (
      <>
        <Navbar setCurrentAuth={setCurrentAuth} />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeScreen />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/single/:id",
          element: <SingleProduct />,
        },
        {
          path: "/orders",
          element: <OrderPage />,
        },
        {
          path: "/shop",
          element: <ShopProduct />,
        },
        {
          path: "/success",
          element: <Success />,
        },
        {
          path: "/cancel",
          element: <Cancel />,
        },
      ],
    },
  ]);
  return (
    <>
      {currentAuth === "login" ? (
        <Authantication
          currentAuth={currentAuth}
          setCurrentAuth={setCurrentAuth}
        />
      ) : currentAuth === "register" ? (
        <Authantication
          currentAuth={currentAuth}
          setCurrentAuth={setCurrentAuth}
        />
      ) : null}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
