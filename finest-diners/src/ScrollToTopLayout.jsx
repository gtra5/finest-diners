import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const ScrollToTopLayout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

export default ScrollToTopLayout;
