import { AppItem, JobItem } from '@/components'
import { MainLayout } from '@/layouts/main-layout'
import Link from 'next/link'
import { TbHandClick } from 'react-icons/tb'

export default function JobsPage() {
  return (
    <MainLayout
      title={'Abelardo Aqui Arroyo | My Career'}
      description={'A brief story of my career'}
    >
      <div className="mt-12 flex flex-col gap-5">
        <p className="section-title">My Career</p>
        {/*  start VASS era */}
        <JobItem
          company={'Sr. Consultant at VASS Latam'}
          resume={
            <>
              <p>
                <strong>Strategic Migration:</strong> Led the migration of a
                legacy banking application for the Human Resources department,
                optimizing the retrieval of critical information.
              </p>
              <p>
                <strong>Agile Methodologies:</strong> Proposed and implemented
                an agile workflow that increased progress visibility and
                improved customer satisfaction through constant tangible
                results.
              </p>
              <p>
                <strong>DevOps Ecosystem:</strong> Configured pipelines in
                Jenkins, Pandora, and OpenShift, automating deployment across
                development, pre-production, and production environments.
              </p>
              <p>
                {' '}
                <strong>Code Quality:</strong> Achieved excellence standards
                (zero critical issues) through the rigorous use of SonarQube and
                Fortify. Technical Solutions: Implemented robust architectures
                including interceptors, Microsoft EntraID integration, and
                global error handling.{' '}
              </p>
            </>
          }
          apps={
            <>
              <AppItem
                imageSrc="/santander.webp"
                alt="Santander"
                resume={
                  <p className="text-justify">
                    Migration of Human Resources app{' '}
                    <strong className="text-enphasis">Angular</strong>
                  </p>
                }
              />
            </>
          }
        />
        {/*  end VASS era */}
        {/*  start Stefanini era */}
        <JobItem
          company={'Frontend Developer at Stefanini Latam'}
          resume={
            <>
              <p>
                <strong>Leadership and Mentoring:</strong> Designed and taught
                intensive Angular courses, achieving rapid training and
                assignment of new developers to critical projects.{' '}
              </p>
              <p>
                <strong>Talent Attraction:</strong> Responsible for the
                evaluation and application of technical interviews for
                Angular-level candidates.
              </p>
              <p>
                <strong>Estimation and Analysis:</strong> Performed technical
                analysis and effort estimation for the company&apos;s new
                commercial projects.
              </p>
              <p>
                <strong>Multi-framework Development:</strong> Maintenance and
                creation of complex functionalities using Angular, Ionic, and
                ReactJS.
              </p>
              <p>
                <strong>Quality Assurance:</strong> Ensured software stability
                by maintaining a minimum unit testing coverage of 95% (80%
                minimum required).
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
          company={'Tech Lead at MX Software Solutions'}
          resume={
            <>
              <p>
                <strong>Business Impact:</strong> Led the second phase of
                &quot;Central Textilera,&quot; successfully recovering 70% of
                the initial investment within its first 6 months of operation.
              </p>
              <p>
                <strong>SEO and Visibility:</strong> Implemented technical
                strategies to improve platform ranking on search engines.
              </p>
              <p>
                <strong>Marketplace Development:</strong> Construction and
                maintenance of the frontend for the &quot;Scorce API
                Marketplace&quot;.
              </p>
            </>
          }
          apps={
            <>
              <AppItem
                imageSrc="/scorce.webp"
                alt="scorce"
                resume={
                  <>
                    <p className="text-justify">
                      Develop, maintenance and add new fetatures to the{' '}
                      <Link
                        href={'https://apimarketplace.scorce.io/#/login'}
                        target="_blank"
                        className="text-enphasis flex items-center gap-2"
                      >
                        <TbHandClick />
                        <strong>API marketplace</strong> <TbHandClick />
                      </Link>
                    </p>
                  </>
                }
              />
              <AppItem
                imageSrc="/ctx.webp"
                alt={'ctx'}
                resume={
                  <p>
                    Currently working on a{' '}
                    <strong className="text-enphasis">NextJs</strong> app, you
                    can find it here{' '}
                    <Link
                      className="text-enphasis flex items-center gap-2 font-bold"
                      href={'https://centraltextilera.com'}
                      target="_blank"
                    >
                      <TbHandClick />
                      <span>Central Textilera</span>
                      <TbHandClick />
                    </Link>
                  </p>
                }
              />
            </>
          }
        />
        {/*  end MXSS era */}
        {/*  start EON era */}
        <JobItem
          company={'Jr. Frontend at EON Igniting Business'}
          resume={
            <>
              <p>
                <strong>Technical Debt Resolution:</strong> Collaborated on
                stabilizing production projects, resolving critical bugs, and
                adding new features.
              </p>
              <p>
                <strong>Data Visualization:</strong> Developed interactive
                dashboards for the graphical monitoring of inventory inflows and
                outflows.
              </p>{' '}
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
      </div>
    </MainLayout>
  )
}
