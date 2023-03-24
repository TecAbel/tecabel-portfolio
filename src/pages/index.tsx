import { HeadPortfolio } from '@/components'
import { HellowSection } from '@/components/sections'
import { MainLayout } from '@/layouts/main-layout'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <MainLayout
        title="AA | About me"
        description="Mi carrera como desarrollador"
      >
        <HeadPortfolio />
        <HellowSection />
        <div className='w-full grid place-items-center mt-6'>
          <Link
            className="
            bg-button
            px-3
            rounded-md
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
