import { useState, useEffect } from 'react';
import { Navbar, Collapse, Typography, Button, IconButton } from "@material-tailwind/react";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

export default function MyNavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 960 && setOpenNav(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let links = [
    { name: 'Escolas', link: 'home', id: 'home', path: '/' },
    { name: 'Cadastre', path: '/form', id: 'form' },
    { name: 'Trivia', path: '/trivia' },
    { name: 'Sobre', link: 'sobre', id: 'Sobre' }
  ];

  const navList = (
    <ul className="flex flex-col md:mb-1 md:mt-0 md:flex-row lg:gap-6">
      {links.map((link) => (
        <li className='md:ml-8 md:my-0 my-7' key={link.id || link.path}>
          {link.path ? (
            <RouterLink
              to={link.path}
              className="text-[16px] font-medium cursor-pointer"
              onClick={() => setOpenNav(false)}>
              {link.name}
            </RouterLink>
          ) : (
            <ScrollLink
              className='text-[16px] font-medium cursor-pointer'
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setOpenNav(false)}
            >
              {link.name}
            </ScrollLink>

          )
          }
        </li>
      ))
      }
    </ul>
  );
  return (

<div className="flex justify-center max-h-[768px] w-auto p-5">
      <Navbar className="rounded-none px-8 py-4 text-black">
        <div className="flex items-center justify-between text-blue-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium text-black">
            Escolas de Samba do grupo especial
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">

              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block">
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block">
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              // Meu hamburguer
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>

    </div>
  );
}