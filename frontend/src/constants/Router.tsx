import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import {
  About,
  Basarilarimiz,
  Blog,
  Contact,
  Dersler,
  Egitmenler,
  SSS,
  Turnuvalar,
} from "../screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/dersler",
    element: <Dersler />,
  },
  {
    path: "/egitmenler",
    element: <Egitmenler />,
  },
  {
    path: "/turnuvalar",
    element: <Turnuvalar />,
  },
  {
    path: "/sss",
    element: <SSS />,
  },
  {
    path: "/hakkimizda",
    element: <About />,
  },
  {
    path: "/basarilarimiz",
    element: <Basarilarimiz />,
  },
]);
