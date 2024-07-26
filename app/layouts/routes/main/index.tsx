import { Outlet } from "@remix-run/react";
import { Footer } from "~/layouts/footer";
import { Navbar } from "~/layouts/navbar";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
