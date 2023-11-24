import React from "react";
import ConnectButton from "../ConnectButton";

const Header = () => {
  return (
    <div
      suppressHydrationWarning
      className="bg-white h-[60px] w-full flex items-center justify-between"
    >
      <h2 className="text-2xl">Logo</h2>
      <ConnectButton />
    </div>
  );
};

export default Header;
