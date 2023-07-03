import { FC } from 'react';
import NavLink from '../NavLink/NavLink';
import Toggle from '../Toggle/Toggle';
import Image from 'next/image';
import Link from 'next/link';
import siteLogo from '../../assets/images/croppedblue150x150.png';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({title}) => {
  return (
    <header className='w-full mb-4 md:mb-0'>
      <div className='bg-darkerGray border-b border-b-borderColor text-center p-1 text-textDark'>
        {title}.js
      </div>
      <div className='container mx-auto max-w-7xl flex flex-wrap justify-center md:flex-nowrap md:justify-between items-start'>
        <Link href='/' className='p-5 order-4  w-full md:w-auto md:order-1'>
          <Image src={siteLogo} alt='Site logo' className='relative z-50 mx-auto md:mr-auto' priority/>
        </Link>
        <div className='flex flex-wrap w-full md:w-auto md:order-3'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/playable'>Playable Portfolio</NavLink>
          <NavLink href='/projects'>Projects</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
          <a href='https://github.com/dnsmith124' target='_blank' rel='noreferrer'></a>
          {/* <Toggle/> */}
        </div>
      </div>
    </header>
  )
}

export default Header;