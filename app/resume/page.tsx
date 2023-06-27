import Page from '@/components/Page/Page';
import { source_code_pro } from '../fonts';

const Resume = () => {
  return (
    <Page title="Resume" description="An online version of David's resume.">
      <p className={`${source_code_pro.className} text-codeBlue mb-3`}>
        Check out some of the projects I've worked on:
      </p>

    </Page>
  )
}

export default Resume;