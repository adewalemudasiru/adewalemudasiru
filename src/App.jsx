import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

const PrivateRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={PrivateRouter} />
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
