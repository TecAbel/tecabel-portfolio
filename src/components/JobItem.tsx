import { FC, ReactNode } from 'react'

type JobItem = {
  company: string
  resume: ReactNode
  apps: ReactNode
}
export const JobItem: FC<JobItem> = ({ company, resume, apps }) => {
  return (
    <div className="mt-4 text-justify">
      <strong className="text-enphasis text-xl">{company} </strong>
      {resume}
      <ul className="mt-5 ">
        <li className="grid grid-cols-1 gap-8 md:grid-cols-2">{apps}</li>
      </ul>
    </div>
  )
}
