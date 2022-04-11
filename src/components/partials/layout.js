import React, { useEffect } from "react";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className=" container bg-black pt-14 min-h-screen   text-white">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
