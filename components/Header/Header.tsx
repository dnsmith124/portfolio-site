import { FC } from 'react';
import NavLink from '../NavLink/NavLink';
import Toggle from '../Toggle/Toggle';
import Image from 'next/image';
import siteLogo from '../../assets/images/blue150x150.png';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({title}) => {
  return (
    <header className='w-full'>
      <div className='bg-darkerGray border-b border-b-borderColor text-center p-1 text-textDark'>
        {title}.js
      </div>
      <div className="container mx-auto max-w-7xl flex justify-between items-start">
        <div>
          <Image src={siteLogo} alt="Site logo" className='relative z-50' />
          <img src="" alt="" />
        </div>
        <div className="flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/playable">Playable Portfolio</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          {/* <Toggle/> */}
        </div>
      </div>
    </header>
  )
}

export default Header;