"use client";

import NavLink from "@/components/nav/nav-links";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import colorToggle from "./colorTogle";
import MenuOverlay from "./menu/menu-overlay";
const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Compétences", href: "#competences" },
  { name: "Projets", href: "#projets" },
  { name: "Expériences", href: "#experiences" },
  { name: "Contact", href: "#contact" },
];

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [colorState, setColorState] = useState(colorToggle.state);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorState(colorToggle.state);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {colorState ? (
        <nav className='w-full left-0 right-0 bg-darkprimary'>
          <div className=' container flex-wrap items-center mx-auto p-8'>
            <Link
              href='/'
              className='text-2xl md:text-5xl text-white font-semibold'
            />
            <div className='block md:hidden'>
              {!isOpen ? (
                <button
                  id='nav-toggle'
                  className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white'
                  onClick={() => setIsOpen(true)}
                >
                  <Bars3Icon className='h-3 w-3' />
                </button>
              ) : (
                <button
                  id='nav-toggle'
                  className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white'
                  onClick={() => setIsOpen(false)}
                >
                  <XMarkIcon className='h-5 w-5' />
                </button>
              )}
            </div>
            <div className='hidden md:block md:w-auto' id='navbar-default'>
              <ul className='font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0 justify-center'>
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink name={item.name} href={item.href} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {isOpen ? <MenuOverlay links={navigation} /> : null}
        </nav>
      ) : (
        <nav className='w-full left-0 right-0 bg-primary'>
          <div className=' container flex-wrap items-center mx-auto p-8'>
            <Link
              href='/'
              className='text-2xl md:text-5xl text-white font-semibold'
            />
            <div className='block md:hidden'>
              {!isOpen ? (
                <button
                  id='nav-toggle'
                  className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white'
                  onClick={() => setIsOpen(true)}
                >
                  <Bars3Icon className='h-3 w-3' />
                </button>
              ) : (
                <button
                  id='nav-toggle'
                  className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white'
                  onClick={() => setIsOpen(false)}
                >
                  <XMarkIcon className='h-5 w-5' />
                </button>
              )}
            </div>
            <div className='hidden md:block md:w-auto' id='navbar-default'>
              <ul className='font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0 justify-center'>
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink name={item.name} href={item.href} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {isOpen ? <MenuOverlay links={navigation} /> : null}
        </nav>
      )}
    </div>
  );
}

// c'est dans la balise <ul> qu'on change la position des boutons chef (justify-center pour centrer, justify-end pour mettre à droite, justify-start pour mettre à gauche)
