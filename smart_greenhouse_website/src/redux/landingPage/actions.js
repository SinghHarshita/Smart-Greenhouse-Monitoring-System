import { LANDING_PAGE_MOBILE_MENU_TOGGLE,LANDING_PAGE_MOBILE_MENU_CLOSE} from "Constants/actionTypes";

export const landingPageMobileMenuToggle = () => {
  return {
    type: LANDING_PAGE_MOBILE_MENU_TOGGLE
  };
};
export const landingPageMobileMenuClose = () => {
  return {
    type: LANDING_PAGE_MOBILE_MENU_CLOSE
  };
};