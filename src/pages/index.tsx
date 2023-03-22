import { HeadPortfolio, NavigationBar } from '@/components'
import { MainLayout } from '@/layouts/main-layout'

export default function Home() {
  return (
    <>
      <MainLayout title='Abelardo Aqui' description='Mi carrera como desarrollador'>
        <div className='container mx-auto flex flex-col'>
          <NavigationBar />
          <HeadPortfolio />
        </div>
      </MainLayout>
    </>
  )
}
