import { FC } from "react";
import { Route } from "react-router-dom";
import { TRoutesConfiguration } from "@pages/routes";
// import { TAuthUserData } from '~types/common';

// export const RouteWithSubRoutes: FC<
//   TRoutesConfiguration & { userRolesParams?: TAuthUserData }
// > = ({ userRolesParams, routes, path, ...props }) => {
//   const Component = props.component as React.FunctionComponent;
//   const render = props.render;
//   return (
//     <Route
//       path={path}
//       render={(props: any) =>
//         render ? (
//           render(props)
//         ) : (
//           <Component
//             {...props}
//             userRolesParams={userRolesParams}
//             routes={routes}
//           />
//         )
//       }
//     />
//   );
// };

// export const renderRoute = (
//   routes?: TRoutesConfiguration[],
//   userRolesParams?: TAuthUserData
// ) =>
//   routes &&
//   routes.map((route, i) => (
//     <RouteWithSubRoutes key={i} userRolesParams={userRolesParams} {...route} />
//   ));

export const RouteWithSubRoutes: FC<TRoutesConfiguration> = ({
  routes,
  path,
  ...props
}) => {
  const Component = props.component as React.FunctionComponent;
  const render = props.render;
  return (
    <Route
      path={path}
      render={(props: any) =>
        render ? render(props) : <Component {...props} routes={routes} />
      }
    />
  );
};

export const renderRoute = (routes?: TRoutesConfiguration[]) =>
  routes && routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
