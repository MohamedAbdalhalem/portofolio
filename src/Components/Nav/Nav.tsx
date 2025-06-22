import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function Nav() {
  return (
    <Navbar fluid  className="bg-gray-950  p-5 shadow-md shadow-gray-400 fixed w-full">
      <NavbarBrand  href="https://flowbite-react.com">
        <span className="text-white text-2xl font-bold">ABDELHALEM</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={"a"} href="#home" className="text-[16px] font-bold text-white">Home</NavbarLink>
        <NavbarLink as={"a"} href="#about" className="text-[16px] font-bold text-white"> About </NavbarLink>
        <NavbarLink as={"a"} href="#projects" className="text-[16px] font-bold text-white">Projects</NavbarLink>
        <NavbarLink as={"a"} href="#contact" className="text-[16px] font-bold text-white">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
