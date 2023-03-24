import { AppItem, JobItem } from '@/components'
import { MainLayout } from '@/layouts/main-layout'

export default function JobsPage() {
  return (
    <MainLayout title={'AA | Jobs'} description={'A brief story of my career'}>
      <div className="mt-12">
        <p className="section-title">My jobs</p>
        <JobItem
          company={'EON Igniting Business'}
          resume={
            <>
              <p>
                The journey started right here, learning{' '}
                <strong className="text-enphasis">Angular</strong>, and
                participate on my very first projects.
              </p>
              <p>Some of my participation as a front-end developer</p>
            </>
          }
          apps={
            <>
              <AppItem
                imageSrc="/inteligas.webp"
                alt="inteligas"
                resume={
                  <p className="text-justify">
                    Mantaining app to manage gasoline consumption for{' '}
                    <span className="text-enphasis">SíVale</span>, called{' '}
                    <span className="text-enphasis">Inteligas</span>.
                  </p>
                }
              />
              <AppItem
                imageSrc="/hindernis.webp"
                alt={'hindernis'}
                resume={
                  <p>
                    Develop an internal app to manage medical supplies for{' '}
                    <span className="text-enphasis">Hindernis</span>.{' '}
                  </p>
                }
              />
            </>
          }
        />
      </div>
    </MainLayout>
  )
}
