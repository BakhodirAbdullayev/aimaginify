import { FC, JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return <div className="auth">{children}</div>;
};

export default Layout;
