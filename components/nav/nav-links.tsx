import React, { FC } from "react";
import Link from "next/link";

interface NavLinkProps {
    name: string;
    href: string;
}

const NavLink: FC<NavLinkProps> = ({ href, name }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent md:p-0 hover:text-black"
            aria-current="page"> {name}
        </Link>
    );
};

export default NavLink;

// block: This sets the display property of the element to block, meaning it will take up the full width of its parent and start on a new line.
// py-2: This adds padding to the top and bottom (y-axis) of the element. The number 2 corresponds to a specific size defined in the Tailwind CSS configuration.
// pl-3: This adds padding to the left of the element. The number 3 corresponds to a specific size defined in the Tailwind CSS configuration.
// pr-4: This adds padding to the right of the element. The number 4 corresponds to a specific size defined in the Tailwind CSS configuration.
// text-[#ADB7BE]: This sets the text color of the element to the hex color #ADB7BE.
// sm:text-xl: On small (sm) screens and above, this sets the font size of the text to xl (extra large).
// rounded: This adds border-radius to the element, making the corners rounded.
// md:bg-transparent: On medium (md) screens and above, this sets the background color of the element to transparent.
// md:p-0: On medium (md) screens and above, this removes all padding from the element.
// hover:text-black: This sets the text color of the element to black when it's hovered over.