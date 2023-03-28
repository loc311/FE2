import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContext } from "./context/AuthContext";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {

  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          {/* <Navbar /> */}
          <div style={{ display: "flex" }}>
            {/* <Sidebar /> */}
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path:"/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/user/:id",
          element: <Single />,
        },
        {
          path: "/users",
          element: <List inputs={userInputs} title="Users" />,
        },
        {
          path: "users/new",
          element: <New inputs={productInputs} title="Add New Product"/>,
        },
        {
          path: "/product/:id",
          element: <Single />,
        },
        {
          path: "/product",
          element: <List inputs={productInputs} title="Products" />,
        },
        // {
        //   path: "/order/:id",
        //   element: <Single />,
        // },
        // {
        //   path: "/order",
        //   element: <List inputs={orderInputs} title="Orders" />,
        // },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
   
};

export default App;
