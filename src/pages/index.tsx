import { HeadPortfolio } from '@/components'
import { HellowSection } from '@/components/sections'
import { MyLinksSection } from '@/components/sections/my-links'
import { MainLayout } from '@/layouts/main-layout'

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
      </MainLayout>
    </>
  )
}
