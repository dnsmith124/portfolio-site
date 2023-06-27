import Page from '@/components/Page/Page';
import { source_code_pro } from '../fonts';

const Projects = () => {
  return (
    <Page title="Projects" description="Some of David's projects.">
      <p className={`${source_code_pro.className} text-codeBlue mb-3`}>
        Check out some of the projects I&apos;ve worked on:
      </p>

    </Page>
  )
}

export default Projects;