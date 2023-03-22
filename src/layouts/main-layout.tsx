import Head from "next/head";
import { FC, ReactNode } from "react";


type MainLayout = {
  title: string
  description: string
  children: ReactNode
}
export const MainLayout: FC<MainLayout> = ({ title, children, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}
