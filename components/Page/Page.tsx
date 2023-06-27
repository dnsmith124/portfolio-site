import HeadMeta from "../HeadMeta/HeadMeta";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FC, ReactNode } from 'react'

interface PageProps {
  title: string;
  description: string;
  children: ReactNode;
}

const Page: FC<PageProps> = ({title = 'Default Title', description = '', children}) => {

  return (
    <div className="text-text">
      <HeadMeta title={title} description={description} />
      <Header title={title} />
      <main className="flex flex-col justify-center w-full flex-1 p-20 max-w-7xl m-auto">
        {
          title !== 'Home' &&
          <div className="mb-5">
            <h1 className="text-6xl font-bold">{title}</h1>
          </div>
        }
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Page;