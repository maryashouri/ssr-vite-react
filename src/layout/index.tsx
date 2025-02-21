// Libraries imports
import { FC, ReactNode } from "react";
import Header from "../components/Header";

type BaseLayoutProps = {
  children: ReactNode;
};

const Layout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="pages">{children}</section>
    </>
  );
};

export default Layout;
