import Auth from "@pages/Auth";
import Chat from "@pages/Chat";
import Error404 from "@pages/Error404";
import Home from "@pages/Home";
import Profile from "@pages/Profile";
import { RouteProps } from "react-router-dom";
import { routePath } from "./route-path";

export type TRoutesConfiguration = RouteProps & {
  routes?: RouteProps[];
};

const { auth, main, notFound, chat, profile } = routePath;

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
  {
    path: profile.path,
    component: Profile,
    exact: true,
  },
  { path: [notFound.path, "*"], exact: true, component: Error404 },
];
