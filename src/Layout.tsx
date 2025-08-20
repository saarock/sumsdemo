import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { useTopLoading } from "./hooks";

const Layout = () => {
  useTopLoading()
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
