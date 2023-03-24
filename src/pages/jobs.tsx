import { AppItem, JobItem } from '@/components'
import { MainLayout } from '@/layouts/main-layout'

export default function JobsPage() {
  return (
    <MainLayout title={'AA | Jobs'} description={'A brief story of my career'}>
      <div className="mt-12 flex flex-col gap-5">
        <p className="section-title">My jobs</p>
        {/*  start EON era */}
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
                    Maintenance app to manage gasoline consumption for{' '}
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
        {/*  end EON era */}
        {/*  start Stefanini era */}
        <JobItem
          company={'Stefanini'}
          resume={
            <>
              <p>
                After a great time as a developer, opportynities came up here I
                learned <strong className="text-enphasis">leadership</strong>{' '}
                knowledge such as leading front-end team, apply job interviews
                to Angular prospects for incomming projects, estimate projects
                efforts for the front-end team, and more...
              </p>
              <p>
                Some of my participation as a front-end developer and front-end
                leader
              </p>
            </>
          }
          apps={
            <>
              <AppItem
                imageSrc="/banorte.webp"
                alt="banorte"
                resume={
                  <p className="text-justify">
                    Maintenance mobile app for Banorte&apos;s clients, with{' '}
                    <strong className="text-enphasis">Ionic</strong>
                  </p>
                }
              />
              <AppItem
                imageSrc="/walmart.webp"
                alt={'walmart'}
                resume={
                  <p>
                    Currently working on maintenance and adding new features for{' '}
                    Walmart&apos;s, internal system
                  </p>
                }
              />
            </>
          }
        />
        {/*  end Stefanini era */}
        {/*  start MXSS era */}
        <JobItem
          company={'MX Software Solutions'}
          resume={
            <>
              <p>
                The perfect place to training my developer and leader skills,
                here I&apos;ve been given trust, support, and knowledge to try
                new things, and to prepare myself to be better for the team.
              </p>
              <p>
                Here I developed my very first NextJs app and manage my first
                front-end team.
              </p>
              <p>
                Some of my participation as a front-end developer and front-end
                leader
              </p>
            </>
          }
          apps={
            <>
              <AppItem
                imageSrc="/scorce.webp"
                alt="scorce"
                resume={
                  <p className="text-justify">
                    Develop, maintenance and add new fetatures to the{' '}
                    <strong className="text-enphasis">API marketplace</strong>{' '}
                  </p>
                }
              />
              <AppItem
                imageSrc="/ctx.webp"
                alt={'ctx'}
                resume={
                  <p>
                    Currently working on a <strong className='text-enphasis'>NextJs</strong>, it is a textile marketplace{' '}
                    about to be publicated.
                  </p>
                }
              />
            </>
          }
        />
        {/*  end MXSS era */}
      </div>
    </MainLayout>
  )
}
