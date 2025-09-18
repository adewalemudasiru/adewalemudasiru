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
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Projects from "./pages/projects/Projects";

const PrivateRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<div>Blog Post Details</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
      {/* You can add more routes or nested routes here if needed */}
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
