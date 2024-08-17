"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Files() {
  return (
    <div>
      {" "}
      {/* <div className="shadow-sm border-r h-full inset-y-0 z-50"> */}
      <div className="text-black">files</div>
      <div>
        {" "}
        <UserButton />
      </div>
    </div>
  );
}

export default Files;
