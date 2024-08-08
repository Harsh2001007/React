import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Errorpage from "./pages/Errorpage";
import ProductDetailPage from "./pages/ProductDetailPage";

const myRoutePaths = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );

// const myRoutePaths = createBrowserRouter(routeDefinations);

export default function App() {
  return (
    <>
      <RouterProvider router={myRoutePaths} />
    </>
  );
}
