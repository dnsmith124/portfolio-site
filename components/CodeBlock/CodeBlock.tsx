import { FC, ReactElement, useEffect } from 'react';
import CrtEffect from '../CrtEffect/CrtEffect';
import "highlight.js/styles/night-owl.css";
import hljs from "highlight.js";
import ScanLine from '../ScanLine/ScanLine';

interface CodeBlockProps {
  children: string | ReactElement[] | ReactElement;
  codeShown?: boolean;
}

const CodeBlock: FC<CodeBlockProps> = ({children, codeShown = false}) => {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return(
    <CrtEffect off className={`bg-darkGray flex p-4 opacity-0 duration-1000 transition-opacity ${codeShown ? 'opacity-100' : ''} `}>
      <pre className='relative z-20 overflow-hidden min-h-[416px] w-full'>
        <ScanLine/>
        <code className="language-typescript bg-transparent	rounded-md shadow-inner">
          {children}
        </code>
      </pre>
    </CrtEffect>
  )
}

export default CodeBlock;