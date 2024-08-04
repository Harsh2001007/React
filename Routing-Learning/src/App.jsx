import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import RootLayout from "./components/RootLayout";

// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage />} />
//     <Route path="/product" element={<ProductPage />} />
//   </Route>
// );

// const myRoutes = createBrowserRouter(routeDefinations);

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/products",
        element: <ProductPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={myRoutes} />
    </>
  );
}
