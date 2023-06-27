import { FC, ReactElement } from 'react'

interface CrtEffectProps {
  className: string;
  children: ReactElement;
}

const CrtEffect: FC<CrtEffectProps> = ({children, className}) => {

  return(
    <div className={`${className} relative rounded-lg animate-text-shadow before:content-[' '] before:bg-crtBgEffect before:bg-crtBgSize before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-10 before:pointer-events-none
      after:content-[' '] after:bg-crtBg after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-0 after:z-10 after:pointer-events-none after:animate-crt-flicker`}>
      {children}
    </div>
  )
}

export default CrtEffect;