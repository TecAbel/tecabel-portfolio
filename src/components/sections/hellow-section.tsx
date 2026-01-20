import { bodyShown, language } from '@/constants/en'
import { FC } from 'react'

export const HellowSection: FC = () => {
  return (
    <>
      <div className="flex flex-col gap-4 text-justify">
        <p
          className="
        section-title
        mt-8
        mb-4
        "
        >
          About me
        </p>
        {bodyShown[language].aboutMe.map((p, i) => {
          return <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
        })}
      </div>
      <div>
        <p
          className="
        section-title
        mt-8
        mb-4
        "
        >
          Skills
        </p>
        <ul className="flex flex-col gap-4">
          {bodyShown[language].skills.map((skill, i) => {
            return (
              <li key={i} className="w-full grid grid-cols-10">
                <p className="col-span-3">
                  <strong>{skill.title}</strong>
                </p>
                <p className="col-span-7">{skill.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
