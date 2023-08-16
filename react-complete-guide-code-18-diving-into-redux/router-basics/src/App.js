import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/Product";
import RootLayout from "./pages/Root";
import Welcome from "./pages/Welcome";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/welcome", element: <Welcome /> },
      { path: "/products", element: <ProductPage /> },
    ],
  },
  {
    path: "/admin",
    element: <p>Admin</p>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
