import React from "react";

import Sample from "pages/sample";

type Route = {
    path: string;
    isAuth?: boolean;
    component: React.FC;
}

const routes: Route[] = [
  {
    path: "/",
    isAuth: false,
    component: Sample,
  },
];

export default routes;
