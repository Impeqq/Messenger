import React, { lazy } from "react";
import { RouteProps } from "react-router-dom";
import { routePath } from "./route-path";

const Error404 = lazy(() => import("@pages/Error404"));
const Home = lazy(() => import("@pages/Home"));
const Chat = lazy(() => import("@pages/Chat"));
const Auth = lazy(() => import("@pages/Auth"));

export type TRoutesConfiguration = RouteProps & {
  routes?: RouteProps[];
};

const { registration, auth, main, notFound, chat } = routePath;

export const routesConfig: TRoutesConfiguration[] = [
  {
    path: main.path,
    component: Home,
    exact: true,
  },
  {
    path: `${chat.path}/:id`,
    exact: true,
    component: Chat,
  },
  {
    path: auth.path,
    component: Auth,
    exact: true,
  },
  { path: [notFound.path, "*"], exact: true, component: Error404 },
];
