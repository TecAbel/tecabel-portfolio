import { HeadPortfolio } from '@/components'
import { HellowSection } from '@/components/sections'
import { MyLinksSection } from '@/components/sections/my-links'
import { MainLayout } from '@/layouts/main-layout'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <MainLayout
        title="Abelardo Aqui Arroyo | About me"
        description="Mi carrera como desarrollador"
      >
        <HeadPortfolio />
        <MyLinksSection />
        <HellowSection />
        <div className="mt-6 grid w-full place-items-center">
          <Link
            className="
            rounded-md
            bg-button
            px-3
            text-3xl
            text-white
            dark:bg-button-dark
            "
            href={'/jobs'}
          >
            About my jobs
          </Link>
        </div>
      </MainLayout>
    </>
  )
}
