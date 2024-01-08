import Image from 'next/image'
import { FC, ReactNode } from 'react'

type AppItem = {
  imageSrc: string
  alt: string
  resume: ReactNode
}
export const AppItem: FC<AppItem> = ({ imageSrc, alt, resume }) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={
          (alt === 'walmart' ? 'bg-white ' : '') +
          'relative aspect-video w-full  rounded-3xl '
        }
      >
        <Image priority className="rounded-3xl" src={imageSrc} fill alt={alt} />
      </div>
      {resume}
    </div>
  )
}
