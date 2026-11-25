import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* Old multi-page URLs now point at their single-page sections. */}
      <Route path="about" element={<Navigate to="/#about" replace />} />
      <Route path="projects" element={<Navigate to="/#work" replace />} />
      <Route path="contact" element={<Navigate to="/#contact" replace />} />
      <Route path="blog/*" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

const App = () => (
  <>
    <RouterProvider router={router} />
    <Analytics />
    <SpeedInsights />
  </>
);

export default App;
