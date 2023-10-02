import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Spinner from "../components/Spinner/Spinner";

const Home = lazy(() => import("../pages/Home/Home"));
const Products = lazy(() => import("../pages/Products/Products"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));


export default function AppRouter() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/nosotros" element={<AboutUs />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}