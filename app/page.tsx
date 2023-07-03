'use client'

import { useEffect, useState } from 'react';
import Page from '@/components/Page/Page';
import CodeBlock from '@/components/CodeBlock/CodeBlock';
import { timeout } from '@/utilities/utilities';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { source_code_pro } from './fonts';

const Home = () => {

  const [codeShown, setCodeShown] = useState(false);
  const [blurbVisible, setBlurbVisible] = useState(false);
  const [animPlayed, setAnimPlayed] = useState<null | boolean>(null);
  const [showContent, setShowContent] = useState(false);
  const [animTrigger, setAnimTrigger] = useState(false);

  const checkLocalStorageForPageLoaded = () => {
    if(typeof window !== "undefined" && !animPlayed) {
      let initAnimPlayed = JSON.parse(window.localStorage.getItem("pageLoaded") || "false") || false;
      setAnimPlayed(initAnimPlayed);
      setAnimTrigger(prev=>!prev);
      window.localStorage.setItem("pageLoaded", "true");
    }
  }

  useEffect(() => {
    checkLocalStorageForPageLoaded();
  // eslint-disable-next-line
  },[]);

  useEffect(()=> {
    if(animPlayed === null)
      return;

    setShowContent(true);
  // eslint-disable-next-line
  }, [animTrigger]);

  const handleResetAnims = async () => {
    setShowContent(false);
    setCodeShown(false);
    setBlurbVisible(false);
    setAnimPlayed(false);
    await timeout(1000).then(()=>{
      setAnimTrigger(prev=>!prev);
    });
  }

  return (
    <Page title="Home" description="A NextJS portfolio site for David Smith.">
      {
        showContent &&

        <section className='grid gap-8 lg:gap-3 lg:grid-cols-home-two-col'>
          <div className='grid content-center'>
            {
              animPlayed 
                ? 
                  <div className={`opacity-0 transition-opacity duration-1000 ${blurbVisible && 'opacity-100'}`}>
                    <p className={`${source_code_pro.className} text-codeBlue`}>Hi there, my name is</p>
                    <TypeAnimation
                      sequence={[
                        250, 
                        'David', 
                        () => {setBlurbVisible(true); setCodeShown(true)},
                      ]}
                      preRenderFirstString
                      wrapper="p"
                      cursor={true}
                      speed={1}
                      deletionSpeed={1}
                      repeat={0}
                      className='text-8xl italic font-bold mb-6 '
                    />
                  </div>
                : 
                  <>
                    <TypeAnimation
                      sequence={[
                        'Hi there, my name is', 
                        250,
                        () => {},
                      ]}
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
                        async () => {setBlurbVisible(true); await timeout(1000).then(()=>setCodeShown(true))},
                      ]}
                      preRenderFirstString
                      wrapper="p"
                      cursor={true}
                      speed={1}
                      deletionSpeed={1}
                      repeat={0}
                      className='text-8xl italic font-bold mb-6 '
                    />
                </>
            }
            {/* <h2 className='text-8xl italic font-bold mb-6'>David</h2> */}
            <div className={`opacity-0 duration-1000 transition-opacity ${blurbVisible ? 'opacity-100 ' : ''}`}>
              <p className={`${source_code_pro.className} text-codeBlue mb-3`}>I&apos;m a frontend developer.</p>
              <p className={`${source_code_pro.className} text-codeBlue mb-3`}>I love writing clean, functional, maintainable code.</p>
              <p className={`${source_code_pro.className} text-codeBlue mb-3`}>...but I love a lot of other things <span className='text-codeBlue font-bold cursor-pointer z-50 relative transition-colors duration-300 underline hover:text-codeBlueDark' onClick={()=>setCodeShown(prev=>!prev)}>too.</span></p>
            </div>
          </div>
          <div className='overflow-auto'>
            <CodeBlock codeShown={codeShown}>
{`const DavidsInterests = ({freeTime, energyLevel}) => {
  if(!freeTime)
    return;

  let activity = '';

  switch (energyLevel) {
    case (energyLevel >= 1): workOnNextNovel(); activity = 'writing';
      break;
    case (energyLevel > .5): hitTheClimbingGym(); activity = 'climbing'; 
      break;
    case (energyLevel >= .15): goPlayVideoGames(); activity = 'gaming'; 
      break;

    default: activity = 'napping'; break;
  }
  return activity;
}`}
            </CodeBlock>
          </div>
          <div className={`opacity-0 duration-1000 transition-opacity lg:col-span-2 ${blurbVisible && 'opacity-100'}`}>
            <p className="mt-10 text-2xl text-center">
              Check out some of the files above to get to know more about me and my <Link href="/projects" className={`text-codeBlue hover:text-codeBlueDark z-50 relative transition-colors duration-300 underline`}>work</Link>.
            </p>
            <p className='text-sm mt-20 text-center'>
              By default the home page animation only runs on first load, click 
              <span 
                className={`text-codeBlue hover:text-codeBlueDark z-50 relative transition-colors duration-300 cursor-pointer mx-2 underline`} 
                onClick={async ()=> handleResetAnims()}>here 
              </span> 
              if you&apos;d like to see it again.
            </p>
          </div>
        </section>
      }

    </Page>
  )
}

export default Home;