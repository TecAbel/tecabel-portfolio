import { FC } from 'react'

export const HellowSection: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <p
        className="
        section-title
        mt-8
        mb-4
        "
      >
        About me
      </p>
      <p className="text-justify">
        My fullname is Abelardo Aqui, I&apos;ve been working as a developer
        since january 2020.
      </p>
      <p className="text-justify">
        At my first job, y learnded an awasome javascript framework{' '}
        <strong className="text-main-dark underline dark:text-main">
          Angular
        </strong>
        , a challenge for anyone who didn&apos;t know typescript, but a great
        framework, with all it&apos;s pros and cons, is one of my favorites
        front-end frameworks to work with, specially for system for company
        users.
      </p>
      <p className="text-justify">
        Once I managed to get experience enough with angular, an opportunity
        came up, the chance to work with{' '}
        <strong className="text-main-dark underline dark:text-main">
          ReactJs
        </strong>
        , the change was not easy, but the experience was priceless, once I
        could handle Hooks and Redux, everything was smooth, and took it&apos;s
        place as my third favorite framework.
      </p>
      <p className="text-justify">
        The last but not least,{' '}
        <strong className="text-main-dark underline dark:text-main">
          NextJs
        </strong>
        , my second favorite framework, It came up, to fix some difficulties of
        the past two... SEO, the capavility to be finded easily on web browsers,
        just as Google, and some other things, with Server Side Rendering, a
        complete different way to work. Perfect for static sites, just like this
        portfolio, or even better, marketplaces...
      </p>
      <p>
        With this kind of experience, and technical knowledge, confidence, a new
        opportunity was right in front, <strong className='text-main-dark dark:text-main underline'>leadership</strong>, my largest
        team was made by three front developers, developping a NextJs app, a
        textile marketplace. Wich is about to be publicated...
      </p>
    </div>
  )
}
