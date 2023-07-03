'use client'

import { useRef, useState } from 'react';
import { source_code_pro } from '@/app/fonts';
import Page from '@/components/Page/Page';
import Monitor from '@/components/Monitor/Monitor';
import FileIcon from '@/components/FileIcon/FileIcon';
import { TypeAnimation } from 'react-type-animation';
import { faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faStethoscope, faPlusCircle, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import tyvasoOne from '@/assets/project-screenshots/Tyvaso.png';
import tyvasoTwo from '@/assets/project-screenshots/Tyvaso2.png';
import tyvasoMob from '@/assets/project-screenshots/Tyvaso-mob.png';
import truckworxOne from '@/assets/project-screenshots/Truckworx.png';
import truckworxTwo from '@/assets/project-screenshots/Truckworx2.png';
import truckworxMob from '@/assets/project-screenshots/Truckworx-mob.png';
import translatorOne from '@/assets/project-screenshots/Translator.png';
import translatorTwo from '@/assets/project-screenshots/Translator2.png';
import translatorThree from '@/assets/project-screenshots/Translator3.png';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image, { StaticImageData } from 'next/image';
import BlinkingCursor from '@/components/BlinkingCursor/BlinkingCursor';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Project {
  id: number;
  label: string;
  name: string;
  images: StaticImageData[];
  description: string;
  icon: IconDefinition;
  links: {label:string, url:string}[];
}

const defaultProject: Project = {
  id: 0,
  label: 'React.js',
  name: 'NIH Biomedical Data Translator',
  images: [translatorOne, translatorThree, translatorTwo],
  description: 'A web-based user interface for the National Insitutes of Health\'s Biomedical Data Translator, which is essentially a set of massive knowledge graphs consisting of an aggregation of biomedical knowledge from a variety of sources. Users can submit queries to the knowledge graphs using a custom-built autocomplete component, then browse results as they return from the various providers, including both a grid-based \'path\' view and a knowledge graph view powered by cytoscape.js.',
  icon: faStethoscope,
  links: [
    {label: 'Live Site', url: 'https://ui.transltr.io/'},
    {label: 'About the Translator Project', url: 'https://ncats.nih.gov/translator/about'},
    {label: 'Github', url: 'https://github.com/NCATSTranslator/ui-fe'},
  ]
} 

const availableProjects: Project[] = [
  defaultProject,
  {
    id: 1,
    label: 'GatsbyJS.jsx',
    name: 'Tyvaso',
    images: [tyvasoOne, tyvasoTwo, tyvasoMob],
    description: 'A site for a large pharmaceutical company, United Therapeutics, promoting one of their medicines. I was fortunate to be able to lead a team of 2 other developers while working on this site. Built using Gatsby.js for the frontend (essentially React with a GraphQL-connected WordPress backend.',
    icon: faReact,
    links: [{label: 'Live Site', url: 'https://www.tyvaso.com/ph-ild/'}]
  },
  {
    id: 2,
    label: 'eCommerce.php',
    name: 'Truckworx',
    images: [truckworxOne, truckworxTwo, truckworxMob],
    description: 'A large scale eCommerce site based on a completely custom design, built from scratch using WordPress and jQuery.',
    icon: faPhp,
    links: [{label: 'Live Site', url: 'https://truckworx.com/'}]
  },
]

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState<null | Project>(defaultProject);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const lightboxIndex = useRef(0);

  return (
    <Page title='Projects' description="Some of David's projects.">
      <TypeAnimation
        sequence={[
          'C', 
          0,
          'Check out a few of the projects I\'ve worked on:', 
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

      <div>
        <Monitor >
          <div className='grid gap-8 lg:grid-cols-projects-two-col '>
            <div className='left bg-darkGray  drop-shadow-lg rounded-md border-darkestGray border flex flex-wrap justify-evenly content-start self-start'>
              <div className='w-full p-2 border-b border-darkestGray rounded-t-md mb-4 bg-darkerGray text-center'>
                <p className='text-sm'>C:/DavidSmith/Projects</p>
              </div>
              {
                availableProjects.map((project)=>{

                  return (
                    <FileIcon 
                      key={project.id} 
                      label={project.label} 
                      subIcon={project.icon} 
                      onClick={()=>{setSelectedProject(project)}}
                      active={selectedProject && project.id === selectedProject.id}
                    />
                  )
                })
              }
            </div>
            <div className='right'>
              {
                selectedProject &&
                <div>
                  <h3 className={`${source_code_pro.className} text-xl text-codeBlue mb-3`}>{selectedProject.name}<BlinkingCursor/></h3>
                  <p>{selectedProject.description}</p>
                  <div className='mt-4'>
                    {
                      selectedProject.links.map((link, i)=>{

                        return(
                          <a href={link.url} key={i} target='_blank' rel='noreferrer' className='inline-flex items-center text-codeBlue underline mr-6 transition-color duration-300 hover:text-codeBlueDark'>
                            {link.label}<FontAwesomeIcon icon={faExternalLink} width='16px' className='ml-2'/>
                          </a>)
                      })
                    }
                  </div>
                </div>
              }
            </div>
            {
              selectedProject &&
              <>
                <h4 className={`${source_code_pro.className} text-l text-codeBlue lg:col-span-2 mt-8`}>Project Screenshots:</h4>  
                <div className=' grid gap-4 lg:grid-cols-projects-auto-col lg:col-span-2'>
                  <Lightbox
                    open={lightboxOpen}
                    index={lightboxIndex.current}
                    close={()=>{setLightboxOpen(false)}}
                    slides={selectedProject.images}
                  />

                  {
                    selectedProject.images.map((image, i)=> {
                      return (
                        <div className='h-72 w-full relative' key={i}>
                          <div 
                            className='bg-darkGray opacity-20 transition-opacity duration-500 absolute top-0 right-0 bottom-0 left-0 z-50 cursor-pointer flex justify-center items-center hover:opacity-0 '
                            onClick={()=>{lightboxIndex.current = i; setLightboxOpen(true);}} 
                            >
                            <FontAwesomeIcon icon={faPlusCircle} width='56px'  className='h-14 w-14'/>
                          </div>
                          <Image 
                            src={image} 
                            alt='project screenshot' 
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            onClick={()=>{lightboxIndex.current = i; setLightboxOpen(true);}} 
                            className=' h-full w-full object-cover object-top rounded-md drop-shadow-md hover:drop-shadow-lg'
                            placeholder='blur'
                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkqLhSDwADmQHNBnts3QAAAABJRU5ErkJggg=='
                          />
                        </div>
                      )
                    })
                  }
                </div>
              </>
            }
          </div>
        </Monitor>
      </div>
    </Page>
  )
}

export default Projects;