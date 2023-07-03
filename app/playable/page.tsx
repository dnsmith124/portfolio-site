import Page from '@/components/Page/Page';
import { source_code_pro } from '../fonts';

const PlayablePortfolio = () => {
  return (
    <Page title='Playable Portfolio' description='An interactive version of David's portfolio.'>
      <p className={`${source_code_pro.className} text-codeBlue mb-3`}>
        An openGL based portfolio <span className='italic'>experience</span>:
      </p>

    </Page>
  )
}

export default PlayablePortfolio;