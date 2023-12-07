import React, {useState} from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import NavLink from "@/components/nav/nav-links";
import MenuOverlay from "../menu/menu-overlay";
import bons_plans from "@/pages/bons_plans";

import GithubIcon from "@/public/images/icones/github-icon.svg";
import LinkedInIcon from "@/public/images/icones/linkedin-icon.svg";
import Image from "next/image";
import Competences from "./competences";

const navigation = [
    { name: 'Accueil', href: 'localhost:3000'},
    { name: 'Compétences', href: 'localhost:3000'},   
    { name: 'Projets', href: 'localhost:3000'},  
    { name: 'Expériences', href: 'localhost:3000'}, 
    { name: 'Bons Plans', href: 'bons_plans'},  
    // { name: <Image src={GithubIcon} alt="Github Icon"/>, href: 'https://github.com/Hezaerd '},
];

export default function Navbar_Section() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" border-[#33353F] top-0 left-0 right-0 z-10 bg-black bg-[#121212] bg-opacity-90">
            <div className=" flex-wrap items-center mx-auto p-8">
                <Link
                    href="/"
                    className="text-2xl md:text-5xl text-white font-semibold"
                >
                </Link>
                <div className="block md:hidden">
                    {!isOpen ? (
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
                            onClick={() => setIsOpen(true)}
                        >
                            <Bars3Icon className="h-3 w-3" />
                        </button>
                        ) : (
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
                            onClick={() => setIsOpen(false)}
                        >
                        <XMarkIcon className="h-5 w-5" />
                        </button>
                        )}
                </div>
                    <ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0 justify-center"> 
                        {navigation.map((item) => {
                            return (
                                <>
                                <li key={item.name}>
                                    
                                        <NavLink                                        
                                            name={item.name}
                                            href={item.href}
                                            /> 
                                
                                </li>
                                </>
                                
                            );
                            
                            
                        })}
                   </ul>
                   
                     




                    




             </div>
            {isOpen ? <MenuOverlay links={navigation} /> : null}
        </nav>
    );
}

// c'est dans la balise <ul> qu'on change la position des boutons chef (justify-center pour centrer, justify-end pour mettre à droite, justify-start pour mettre à gauche)