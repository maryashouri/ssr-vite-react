import { FC, ReactNode } from "react";
import Header from "../components/Header";
import "./layout.style.scss";

type BaseLayoutProps = {
  children: ReactNode;
};

const Layout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="pages">{children}</section>
      <footer className="footer">
        <p>&copy; 2025 </p>
      </footer>
    </>
  );
};

export default Layout;
