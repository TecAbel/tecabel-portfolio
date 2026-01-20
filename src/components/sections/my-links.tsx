import { bodyShown, language } from '@/constants/en'
import Link from 'next/link'

export const MyLinksSection = () => {
  return (
    <div className="mt-8 w-full">
      <div className="mt-20"></div>
      <a href={`mailto:${bodyShown[language].head.mail}`}>
        <button className="btn w-full ">
          {bodyShown[language].myLinks.btn}
        </button>
      </a>

      <div className="mt-20"></div>
      <div className="mt-5 grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-4">
        {bodyShown[language].myLinks.links.map((link, i) => {
          return (
            <Link
              key={i}
              className="my-link enphasis font-bold"
              href={link.href}
              passHref={false}
            >
              {<link.icon className={link.iconClass} />}
              <span>{link.text}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
