import { FC, ReactNode } from 'react'
import HeadMeta from '@/components/HeadMeta/HeadMeta';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CrtEffect from '@/components/CrtEffect/CrtEffect';

interface PageProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const Page: FC<PageProps> = ({title, description = '', children}) => {

  return (
    <CrtEffect>
      <div className='text-text relative min-h-screen'>
      {/* <ScanLine /> */}
        <HeadMeta title={title} description={description} />
        <Header title={title} />
        <main className='flex flex-col justify-center w-full flex-1 p-5 max-w-7xl m-auto'>
          {
            title !== 'Home' &&
            <div className='mb-5'>
              <h1 className='text-6xl font-bold'>{title}</h1>
            </div>
          }
          {children}
        </main>
        <Footer />
      </div>
    </CrtEffect>
  )
}

export default Page;