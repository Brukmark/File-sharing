import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import React from "react";

function TopHeader() {
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <AlignJustify className="md:hidden" />
      <img
        src="/logo.svg"
        alt="no"
        width={150}
        height={100}
        className="md:hidden"
      />
      <UserButton />
    </div>
  );
}

export default TopHeader;
