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

const PrivateRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={PrivateRouter} />
    </>
  );
};

export default App;
