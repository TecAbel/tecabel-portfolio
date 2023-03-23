import { FC } from 'react'
import { ThemeButton } from './ThemeButton'

export const NavigationBar: FC = () => {
  return (
    <div className="fixed left-0 right-0 w-full">
      <div
        className="
        absolute 
        z-[1]
        h-[4rem]
        w-full
        bg-transparent blur-sm
        "
      ></div>
      <div
        className="
        absolute
        z-10
        grid
        w-full
        grid-cols-4
        justify-between
        gap-4
        p-3
        "
      >
        <div className="col-span-3">Abelardo Aqui</div>
        <div className="col-span-1 flex justify-end">
          <ThemeButton />
        </div>
      </div>
    </div>
  )
}
