import Logo from "./Logo";
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import tw from "twin.macro";

const Component = tw.header`flex text-white w-full absolute top-0 left-0 justify-between p-4 sm:(px-8 py-8) z-50`;

const Header = ({ dark }) => {
  const [open, setOpen] = useState(false);
  return (
    <Component>
      <Logo />
      <Menu open={open} onClose={() => setOpen(false)} />
      <MenuButton dark={dark} onClick={() => setOpen(true)} />
    </Component>
  );
};

export default Header;
