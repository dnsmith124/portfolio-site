import { FC, ReactElement, useEffect } from 'react';
// import "highlight.js/styles/github.css";
import "highlight.js/styles/night-owl.css";
import hljs from "highlight.js";

interface CodeBlockProps {
  children: string | ReactElement[] | ReactElement;
}

const CodeBlock: FC<CodeBlockProps> = ({children}) => {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return(
    <pre>
      <code className="language-typescript bg-transparent	rounded-md shadow-inner">
        {children}
      </code>
    </pre>
  )
}

export default CodeBlock;