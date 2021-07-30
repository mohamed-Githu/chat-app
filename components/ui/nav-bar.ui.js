import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";

import Container from "../styles/container.styles";
import Typography from "../styles/typography.styles";

const links = ["Product", "Services", "Contacts", "Login"];

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const handleDrawer = () => setOpenDrawer((prevState) => !prevState);

  return (
    <>
      <nav className="fixed top-0 w-full py-5 bg-primary-light z-50 px-4 shadow-lg">
        <Container className="flex items-center">
          <img
            src="/chatapp-logo.svg"
            alt="chat-app logo"
            className="mr-auto h-8"
          />
          <MenuIcon
            className="h-8 cursor-pointer text-white hidden lg:inline"
            onClick={handleDrawer}
          />
          <div className="flex items-center space-x-12 lg:hidden">
            {links.map((link) => (
              <Typography key={link} variant="link">
                {link}
              </Typography>
            ))}
            <button className="px-6 py-2 bg-white-transparent rounded-full">
              <p className="opacity-90 font-roboto text-white text-lg">
                Try for free
              </p>
            </button>
          </div>
        </Container>
        <div
          className={`absolute bottom-0 left-1/2 h-0.5 bg-white transition-all duration-500 delay-75 ease-out transform -translate-x-1/2 ${
            !openDrawer ? "w-screen" : "w-0"
          }`}
        />
      </nav>
      <div
        className={`h-screen fixed bg-primary-light w-56 px-4 pt-24 left-0 top-0 z-40 duration-300 space-y-8 flex flex-col ${
          openDrawer ? "-translate-x-96" : "translate-x-0"
        }`}
      >
        {links.map((link) => (
          <Typography key={link} variant="link" onClick={handleDrawer}>
            {link}
          </Typography>
        ))}
        <button className="px-6 py-1 bg-white-transparent rounded-full">
          <p className="opacity-90 font-roboto text-white text-lg">
            Try for free
          </p>
        </button>
      </div>
      {!openDrawer && (
        <div
          className={`hidden lg:block fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-brightness-50 duration-300 ease-out ${
            !openDrawer ? "opacity-80" : "hidden opacity-0"
          }`}
          onClick={handleDrawer}
        />
      )}
    </>
  );
};

export default NavBar;
