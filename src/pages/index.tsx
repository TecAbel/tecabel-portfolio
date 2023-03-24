import { HeadPortfolio } from '@/components'
import { HellowSection } from '@/components/sections'
import { MainLayout } from '@/layouts/main-layout'

export default function Home() {
  return (
    <>
      <MainLayout title='AA | About me' description='Mi carrera como desarrollador'>
        <HeadPortfolio />
        <HellowSection />
      </MainLayout>
    </>
  )
}
