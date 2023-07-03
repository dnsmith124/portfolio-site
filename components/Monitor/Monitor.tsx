import { FC, ReactElement, useEffect, useState } from 'react';
import CrtEffect from '../CrtEffect/CrtEffect';
import 'highlight.js/styles/night-owl.css';
import ScanLine from '../ScanLine/ScanLine';

interface MonitorProps {
  children: string | ReactElement[] | ReactElement;
}

const Monitor: FC<MonitorProps> = ({children}) => {

  const [showMonitor, setShowMonitor] = useState(false);

  useEffect(()=>{
    setShowMonitor(true);
  },[]);

  return(
    <CrtEffect off className={`bg-darkGray flex p-4 opacity-0 duration-1000 transition-opacity ${showMonitor && 'opacity-100'} `}>
      <div className='relative z-20 overflow-hidden w-full'>
        <ScanLine/>
        <div className='language-typescript bg-transparent p-4 rounded-md shadow-inner bg-monitorBaseColor'>
          {children}
        </div>
      </div>
    </CrtEffect>
  )
}

export default Monitor;