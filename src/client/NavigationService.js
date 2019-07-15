import {NavigationActions} from "react-navigation";

let _navigator;

function setTOpLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params, drawer=null) {
  if(drawer) {
    drawer.close();
  }

  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  navigate,
  setTOpLevelNavigator,
}
