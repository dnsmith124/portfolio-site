'use client'

import Page from '@/components/Page/Page';
import { source_code_pro } from '@/app/fonts';
import Monitor from '@/components/Monitor/Monitor';
import { TypeAnimation } from 'react-type-animation';
import { useWindowSize } from '@/utilities/utilities';

const PlayablePortfolio = () => {

  const minScreenWidth = 1024;
  const {width} = useWindowSize();

  return (
    <Page title='Playable Portfolio' description="An interactive version of David's portfolio.">
      <TypeAnimation
        sequence={[
          'A', 
          0,
          'An openGL-based portfolio *experience*:', 
          250,
          () => {},
        ]}
        preRenderFirstString
        wrapper='p'
        cursor={false}
        speed={50}
        deletionSpeed={1}
        repeat={0}
        className={`${source_code_pro.className} text-codeBlue mb-5`}
      />
      <Monitor>
        {
          (width === undefined || width < minScreenWidth)
          ? 
            <p className="text-m">My playable portfolio was designed with Mouse & Keyboard controls in mind, along with a widescreen width. If you&apos;re on a desktop or laptop, please increase the width of your browser window until this message disappears. If you&apos;re on a mobile device or tablet, check out this page on either a desktop or laptop to play.</p>
          : 
            <>
              <p className="mb-2 text-center">The game can take a minute or two to load its assets when first accessed, please be patient!</p>
              <div className=" w-full rounded-md p-4">
                <div className="aspect-video ">
                  <iframe src="https://demo.dnswebdev.com/"  className=" w-full h-full" ></iframe>
                </div>
              </div>
            </>
        }
      </Monitor>

    </Page>
  )
}

export default PlayablePortfolio;