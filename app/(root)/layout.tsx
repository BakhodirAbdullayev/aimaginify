import MobileNav from "@/components/shared/mobile-nav";
import Sidebar from "@/components/shared/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { FC, JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>

      <Toaster />
    </main>
  );
};

export default Layout;
