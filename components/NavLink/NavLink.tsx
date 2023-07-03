'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, ReactNode, cloneElement } from 'react';

interface NavLinkProps {
    href: string;
    children: string | ReactElement;
    external?: boolean;
    icon?: boolean;
    [key: string]: any;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, external = false, icon = false, ...props }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    const classList =`${isActive ? 'bg-darkGray border-t border-t-codeBlueDark border-b-0' : 'bg-darkerGray text-textDark'} p-4 whitespace-nowrap border-y border-l border-borderColor last-of-type:border-r transition-all ease-in-out duration-200 flex-1 text-center md:flex-none hover:bg-darkGray hover:text-text`;

    return (
      external ?
      <a 
        href={href} 
        className={`${classList} flex items-center justify-center`}
        {...props}
        >
        {children}
      </a>
      :
      <Link 
        href={href} 
        className={`${classList}`} 
        {...props} 
        >
        {children}
      </Link>
    )
}

export default NavLink;
