import {
  LANDING_PAGE_MOBILE_MENU_TOGGLE,
  LANDING_PAGE_MOBILE_MENU_CLOSE
} from "Constants/actionTypes";

const INIT_STATE = {
  isMobileMenuOpen: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LANDING_PAGE_MOBILE_MENU_TOGGLE:
      return Object.assign({}, state, {
        isMobileMenuOpen: !state.isMobileMenuOpen
      });
    case LANDING_PAGE_MOBILE_MENU_CLOSE:
      return Object.assign({}, state, {
        isMobileMenuOpen: false
      });
    default:
      return { ...state };
  }
};
