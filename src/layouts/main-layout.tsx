import { NavigationBar } from '@/components'
import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { FaAngular, FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiNestjs } from 'react-icons/si'

type MainLayout = {
  title: string
  description: string
  children: ReactNode
}
export const MainLayout: FC<MainLayout> = ({
  title,
  children,
  description
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-col">
        <NavigationBar />
        <div className="mx-auto flex max-w-xl flex-col p-4">
          <div
            className="
            mt-[7rem]
            grid 
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            "
          >
            <FaAngular className="technology-item angular" />
            <FaReact className="technology-item react" />
            <TbBrandNextjs className="technology-item next" />
            <SiNestjs className="technology-item nest" />
          </div>
          {children}
        </div>
      </main>
    </>
  )
}
