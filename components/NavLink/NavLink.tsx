'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, ReactNode, cloneElement } from 'react';

interface NavLinkProps {
    href: string;
    children: string | ReactElement;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, ...props }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link 
        href={href} 
        className={`${isActive ? 'bg-darkGray border-t border-t-codeBlueDark' : 'bg-darkerGray text-textDark'} border-y border-l border-borderColor last-of-type:border-r p-4 transition-all ease-in-out duration-200 hover:bg-darkGray hover:text-text`} 
        {...props} 
        >
        {children}
      </Link>
    )
}

export default NavLink;
