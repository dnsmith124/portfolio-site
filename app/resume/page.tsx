import Page from '@/components/Page/Page';
import { source_code_pro } from '../fonts';

const Resume = () => {
  return (
    <Page title="Resume" description="An online version of David's resume.">
      <p className={`${source_code_pro.className} text-codeBlue mb-3`}>
        My resume:
      </p>

    </Page>
  )
}

export default Resume;