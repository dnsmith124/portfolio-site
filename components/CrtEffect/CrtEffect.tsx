import { FC, ReactElement } from 'react'
import ScanLine from '../ScanLine/ScanLine';

interface CrtEffectProps {
  children: ReactElement[] | ReactElement;
  className?: string;
  off?: boolean;
  scanline?: boolean;
}

// credit to Alec Lownes for their excellent css-only implementation of this effect: http://aleclownes.com/2017/02/01/crt-display.html

const CrtEffect: FC<CrtEffectProps> = ({children, className = '', off = false, scanline = false}) => {

  const effectStyles = `animate-text-shadow before:content-[' '] z-100 before:bg-crtBgEffect before:bg-crtBgSize before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-100 before:pointer-events-none
  after:content-[' '] after:bg-crtBg after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-0 after:z-100 after:pointer-events-none after:animate-crt-flicker`;

  return(
    <div className={`${className} relative z-50 shadow-inner rounded-lg ${off ? '' : effectStyles}`}>
      {
        scanline && 
        <ScanLine/>
      }
      {children}
    </div>
  )
}

export default CrtEffect;