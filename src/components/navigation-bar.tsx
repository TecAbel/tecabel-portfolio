import { FC } from 'react'
import { ThemeButton } from './ThemeButton'
import { MdDvr } from 'react-icons/md'
import Link from 'next/link'

export const NavigationBar: FC = () => {
  return (
    <div className="fixed left-0 right-0 z-50 w-full">
      <div
        className="
        absolute
        z-10
        grid
        w-full
        grid-cols-4
        justify-between
        gap-4
        bg-main/60
        p-3
        backdrop-blur-md
        dark:bg-main-dark/60
        "
      >
        <div className="col-span-3 flex gap-4">
          <div className="flex items-center gap-1">
            <span className="text-2xl">
              <MdDvr />
            </span>{' '}
            <h1>
              <strong>Abelardo Aqui</strong>
            </h1>
          </div>
          <NavSections />
        </div>
        <div className="col-span-1 flex justify-end">
          <ThemeButton />
        </div>
      </div>
    </div>
  )
}

const NavSections: FC = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/jobs'}>Jobs</Link>
      </li>
    </ul>
  )
}
