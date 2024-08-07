import React from "react";

interface Route {
  path: string;
  element?: React.LazyExoticComponent<React.FC>;
  children?: Route[];
}

const routes: Route[] = [
  {
    path: "/",
    element: React.lazy(() => import("../pages/main/WelcomeScreen")),
  }
];

export default routes;