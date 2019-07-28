import {NavigationActions} from "react-navigation";
import DrawerService from './DrawerService';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function getActiveRouteState (route) {
  if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
    return route;
  }

  const childActiveRoute = route.routes[route.index];
  return getActiveRouteState(childActiveRoute);
}

function navigate(routeName, params, drawer=null) {
  DrawerService.closeDrawer();

  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
  getActiveRouteState,
}
