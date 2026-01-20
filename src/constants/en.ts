import { RenderParagraph } from '@/components/paragraph'
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa'

export const bodyInfoEn = {
  head: {
    name: ' Hi, I&apos;m Abel!',
    role: 'Tech Consultant',
    mail: 'business@abelardo-aqui-arroyo.dev'
  },
  myLinks: {
    btn: 'Let\'s talk about your project!',
    links: [
      {
        text: 'My Career',
        href: '/jobs',
        target: '_blank',
        passHref: false,
        icon: FaCode,
        iconClass: 'icon-primary text-3xl'
      },
      {
        text: 'LinkedIn',
        target: '_blank',
        href: 'https://www.linkedin.com/in/abelardo-aqui-arroyo-dev',
        passHref: false,
        icon: FaLinkedin,
        iconClass: 'icon-linkedin text-3xl'
      },
      {
        text: 'Github',
        target: '_blank',
        href: 'https://github.com/TecAbel',
        passHref: false,
        icon: FaGithub,
        iconClass: 'icon-github text-3xl'
      }
    ]
  },
  skills: [
    {
      title: 'Architecture',
      text: 'SOLID Principles, Design Patterns, Unit Testing (80%+ coverage)'
    },
    {
      title: 'Frontend',
      text: 'Angular (TypeScript, RxJS, LazyLoad, Interceptors, Guards), React (NextJS, Redux, Hooks, Axios)'
    },
    {
      title: 'DevOps & Tools',
      text: 'Jenkins, OpenShift, GIT (Hooks/Workflow), SonarQube, Fortify'
    },
    {
      title: 'Backend',
      text: 'Node/NestJS, .NET (REST API, Entity Framework, JWT, Swagger, Prisma, MongoDB)'
    }
  ],
  aboutMe: [
    '<strong>Sr. Consultant</strong> with a professional track record starting in 2020, specializing in the creation of scalable and efficient solutions. With a strategic vision that balances technical excellence with team leadership, I aim to optimize development processes and foster continuous learning environments to achieve high-impact business objectives.',
    'Let\'s talk about your projects, and together build them up!'
  ],
  jobs: [
    {
      company: 'Stefanini Latam',
      resume: RenderParagraph(
        'After a great time as a developer, opportynities came up here I learned <strong className="text-enphasis">leadership</strong> knowledge such as leading front-end team, apply job interviews to Angular prospects for incomming projects, estimate projects efforts for the front-end team, and more...'
      )
    }
  ]
}

export const language: 'es' | 'en' = 'en'

export const bodyShown = {
  en: bodyInfoEn,
  es: bodyInfoEn
}
