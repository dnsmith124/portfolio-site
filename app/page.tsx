'use client'

import { useState } from 'react';
import Page from '@/components/Page/Page';
import CrtEffect from '@/components/CrtEffect/CrtEffect';
import Link from 'next/link';
import { source_code_pro } from './fonts';
import CodeBlock from '@/components/CodeBlock/CodeBlock';

const Home = () => {

  const [codeShown, setCodeShown] = useState(false);
  
  return (
    <Page title="Home" description="A NextJS portfolio site for David Smith.">
      <p className={`${source_code_pro.className} text-codeBlue`}>Hi there, my name is</p>
      <h2 className="text-8xl font-bold mb-10">David</h2>
      <section className='grid grid-cols-2'>
        <div>
          <p className={`${source_code_pro.className} text-codeBlue mb-3`}>I'm a frontend developer.</p>
          <p className={`${source_code_pro.className} text-codeBlue mb-3`}>I love writing clean, functional, maintainable code.</p>
          <p className={`${source_code_pro.className} text-codeBlue mb-3`}>...but I love a lot of other things <span className='text-codeBlueDark cursor-pointer' onClick={()=>setCodeShown(prev=>!prev)}>too.</span><span className='font-thin text-lg animate-blinking-cursor'>|</span></p>
        </div>
        <div>
        <CrtEffect off className={`bg-darkGray flex w-fit p-4 opacity-0 duration-500 transition-opacity ${codeShown ? 'opacity-100' : ''} `}>
        <CodeBlock>

  {`const DavidsInterests = ({freeTime, energyLevel}) => {
    if(!freeTime)
      return;

    let activity = '';

    switch (energyLevel) {
      case (energyLevel >= 1): workOnNextNovel(); activity = 'writing'; break;
      case (energyLevel > .5): hitTheClimbingGym(); activity = 'climbing'; break;
      case (energyLevel >= .25): goPlayVideoGames(); activity = 'gaming'; break;
      case (energyLevel > .1): goPlayVideoGames(); activity = 'gaming'; break;

      default: activity = 'napping'; break;
    }
    return activity;
  }`}
        </CodeBlock>
        </CrtEffect>
      </div>
      </section>


      <p className="mt-3 text-2xl">
        Take a look around to get to know more about me and my <Link href="/projects" className={`${source_code_pro.className} text-codeBlue hover:text-codeBlueDark`}>work</Link>.
      </p>
    </Page>
  )
}

export default Home;