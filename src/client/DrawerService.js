let _drawer;

function setTopLevelDrawer(drawerRef) {
  _drawer = drawerRef;
}

function openDrawer() {
  _drawer.open();
}

function closeDrawer() {
  _drawer.close();
}


export default {
  setTopLevelDrawer,
  openDrawer,
  closeDrawer,
}
