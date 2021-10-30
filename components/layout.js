import { Nav } from "./nav";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <div className="p-6 mx-auto">{children}</div>
    </div>
  );
};
