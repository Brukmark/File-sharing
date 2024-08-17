import React from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";

function layout({ children }) {
  return (
    <div>
      <div className="text-black w-64 h-full fixed  inset-y-0 z-50 md:flex hidden">
        <SideNav />
      </div>
      <div className=" md:ml-64 ">
        {" "}
        <TopHeader /> {children}
      </div>
    </div>
  );
}

export default layout;
