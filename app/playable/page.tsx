'use client'

import Page from '@/components/Page/Page';
import { source_code_pro } from '@/app/fonts';
import Monitor from '@/components/Monitor/Monitor';
import { TypeAnimation } from 'react-type-animation';

const PlayablePortfolio = () => {
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
        <p className={`${source_code_pro.className} text-codeBlue mb-0 p-4`}>
          Coming Soon...
        </p>
      </Monitor>

    </Page>
  )
}

export default PlayablePortfolio;