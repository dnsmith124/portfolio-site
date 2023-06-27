'use client'

import { useState } from 'react';
import Page from '@/components/Page/Page';
import CodeBlock from '@/components/CodeBlock/CodeBlock';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { source_code_pro } from './fonts';

const Home = () => {

  const [codeShown, setCodeShown] = useState(false);
  const [blurbVisible, setBlurbVisible] = useState(false);
  
  return (
    <Page title="Home" description="A NextJS portfolio site for David Smith.">

      <section className='grid grid-cols-2'>
        <div className='grid content-center'>
          {/* <p className={`${source_code_pro.className} text-codeBlue`}>Hi there, my name is</p> */}
          <TypeAnimation
            sequence={[
              'Hi there, my name is', 
              250,
              () => {},
            ]}
            // preRenderFirstString
            wrapper="p"
            cursor={false}
            speed={1}
            deletionSpeed={1}
            repeat={0}
            className={`${source_code_pro.className} text-codeBlue`}
          />
          <TypeAnimation
            sequence={[
              '', 
              2500,
              'D', 
              250, 
              'Ds', 
              250, 
              'Da', 
              250, 
              'Dav', 
              250, 
              'Davo', 
              250, 
              'Davod', 
              250, 
              'Davi',
              250, 
              'David', 
              () => {setBlurbVisible(true)},
            ]}
            preRenderFirstString
            wrapper="p"
            cursor={true}
            speed={1}
            deletionSpeed={1}
            repeat={0}
            className='text-8xl italic font-bold mb-6 '
          />
          {/* <h2 className='text-8xl italic font-bold mb-6'>David</h2> */}
          <div className={`opacity-0 duration-500 transition-opacity  ${blurbVisible ? 'opacity-100 ' : ''}`}>
            <p className={`${source_code_pro.className} text-codeBlue mb-3`}>I'm a frontend developer.</p>
            <p className={`${source_code_pro.className} text-codeBlue mb-3`}>I love writing clean, functional, maintainable code.</p>
            <p className={`${source_code_pro.className} text-codeBlue mb-3`}>...but I love a lot of other things <span className='text-codeBlueDark cursor-pointer' onClick={()=>setCodeShown(prev=>!prev)}>too</span><span className='font-thin text-lg animate-blinking-cursor'>|</span></p>
          </div>
        </div>
        <div>
        <CodeBlock codeShown={codeShown}>
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
      </div>
      </section>


      <div className={`opacity-0 duration-500 transition-opacity  ${blurbVisible ? 'opacity-100 ' : ''}`}>
        <p className="mt-10 text-2xl text-center">
          Take a look around to get to know more about me and my <Link href="/projects" className={`${source_code_pro.className} text-codeBlue hover:text-codeBlueDark`}>work</Link>.
        </p>
      </div>
    </Page>
  )
}

export default Home;