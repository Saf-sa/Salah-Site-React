import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import PhotoLayout from "./layouts/photoLayout";
import { BrowserRouter as Router, } from 'react-router-dom';


// styles

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Film from "./pages/Film";
import Model from "./pages/Model";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import MusicPhoto from './pages/MusicPhoto';
import SportPhoto from './pages/SportPhoto';
import SkyPhoto from './pages/SkyPhoto';
import TownPhoto from './pages/TownPhoto';
import GayaPhoto from './pages/GayaPhoto';
import HumanPhoto from './pages/HumanPhoto';

import Products from "./pages/products/Products";

import { productsLoader } from "./pages/products/Products";
import ProductDetails, {
  fetchProductDetails,
} from "./pages/products/ProductDetails";
import ProductsLayout from "./layouts/ProductsLayout";
import CartDetails from "./pages/products/CartDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="music" element={<Music />} />
      <Route path="film" element={<Film />} />
      <Route path="photo" element={<PhotoLayout />} />
      <Route path="model" element={<Model />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<ProductsLayout />}>
        <Route element={<Products />} loader={productsLoader} />
        <Route path="cart" element={<CartDetails />} />
        <Route
          path=":pid"
          element={<ProductDetails />}
          loader={fetchProductDetails}
        />
      </Route>

      <Route path="photo" element={<PhotoLayout />}>
        <Route path="music" element={<MusicPhoto />} />
        <Route path="human" element={<HumanPhoto />} />
        <Route path="sport" element={<SportPhoto />} />
        <Route path="sky" element={<SkyPhoto />} />
        <Route path="town" element={<TownPhoto />} />
        <Route path="gaya" element={<GayaPhoto />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
