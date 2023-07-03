import Head from 'next/head';
import { FC } from 'react'

interface HeadMetaProps {
  title: string;
  description: string;
}

const HeadMeta: FC<HeadMetaProps> = ({description = '', title = 'Default Title'}) => {

  return(
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default HeadMeta;