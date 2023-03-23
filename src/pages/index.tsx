import { HeadPortfolio, NavigationBar } from '@/components'
import { HellowSection } from '@/components/sections'
import { MainLayout } from '@/layouts/main-layout'

export default function Home() {
  return (
    <>
      <MainLayout title='Abelardo Aqui' description='Mi carrera como desarrollador'>
        <NavigationBar />
        <div className='max-w-lg mx-auto flex flex-col'>
          <HeadPortfolio />
          <HellowSection />
        </div>
      </MainLayout>
    </>
  )
}
