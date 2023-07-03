import Page from '@/components/Page/Page';
import { source_code_pro } from '../fonts';

const Contact = () => {
  return (
    <Page title='Contact' description='An interactive version of David's portfolio.'>
      <p className={`${source_code_pro.className} text-codeBlue mb-3`}>
        Get in touch with me:
      </p>

    </Page>
  )
}

export default Contact;