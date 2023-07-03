import { FC, MouseEventHandler } from 'react';
import { source_code_pro } from '@/app/fonts';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

interface FileIconProps {
  subIcon?: IconDefinition | null;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean | null | undefined;
}

const FileIcon: FC<FileIconProps> = ({ subIcon = null, label = '', onClick = () => {}, active = false}) => {

  return(
    <button className={`cursor-pointer text-center mx-5 mb-5  hover:underline ${active && 'underline font-bold'} `} onClick={onClick}>
      <div className='relative flex justify-center animate-wobble'>
        <FontAwesomeIcon width='80px' style={{display: 'inline-block'}} className='w-20 h-20 drop-shadow-md' icon={faFile} />
        {subIcon !== null &&
          <div className='absolute top-3 right-0 bottom-0 left-0 z-10 flex justify-center items-center'>
            <FontAwesomeIcon width='36px' style={{height: '36px'}} className=' text-darkerGray fill-current' icon={subIcon} />
          </div>
        }
      </div>
      <p className={`${source_code_pro.className} text-sm mt-2`} >{label}</p>
    </button>
  )
}

export default FileIcon;