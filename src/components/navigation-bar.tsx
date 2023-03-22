import { ThemePortfolio } from "@/utils/theme"
import { FC } from "react"
import { MdNightlightRound } from 'react-icons/all'

export const NavigationBar: FC = () => {
  const themeService = new ThemePortfolio()
  const onThemeToogle = () => {
    themeService.toogleTheme()
  }
  return (
    <div className="fixed w-full left-0 right-0">
      <div className="
        absolute 
        bg-transparent
        h-[4rem]
        w-full
        blur-sm z-[1]
        ">
      </div>
      <div className="
        absolute
        w-full
        z-10
        p-3
        grid
        gap-4
        justify-between
        grid-cols-4
        ">
        <div className="col-span-3">navigation bar</div>
        <div className="col-span-1 flex justify-end">
          <button
            onClick={() => onThemeToogle()}
            className="
            rounded-md
            border-[1px]
            border-white
            bg-main-dark
            dark:bg-main
            text-white
            dark:text-main-dark
            p-2
            shadow-black
            dark:shadow-main
            shadow-sm
            ">
            <MdNightlightRound />
          </button>
        </div>
      </div>
    </div>
  )
}
