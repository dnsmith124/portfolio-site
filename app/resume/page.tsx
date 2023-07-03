import Page from '@/components/Page/Page';
import { TypeAnimation } from 'react-type-animation';
import { source_code_pro } from '../fonts';

const Resume = () => {
  return (
    <Page title="Resume" description="An online version of David's resume.">
      <TypeAnimation
        sequence={[
          'M', 
          0,
          'My resume:', 
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
    </Page>
  )
}

export default Resume;