import { useReady } from "@/utils/isReady";
import { ThemePortfolio } from "@/utils/theme";
import { FC, useEffect, useMemo, useState } from "react";
import { MdNightlightRound, MdSunny } from 'react-icons/md'

export const ThemeButton: FC = () => {
  const themeService = useMemo(() => new ThemePortfolio(), [])
  const loaded = useReady()
  useEffect(() => {
    themeService.setFirst()
  }, [themeService])
  const [currentTheme, setcurrentTheme] = useState(themeService.getStorageTheme())
  const onThemeToogle = () => {
    themeService.toogleTheme()
    setcurrentTheme(themeService.getStorageTheme())
  }
  return (

    <button
      onClick={() => onThemeToogle()}
      className="
            rounded-md
            bg-main-dark
            p-2
            text-white
            shadow-sm
            shadow-black
            dark:bg-main
            dark:text-main-dark
            dark:shadow-main
            "
    >
      {
        loaded && currentTheme == 'light'
          ? <MdNightlightRound />
          : <MdSunny />
      }
    </button>
  )
}
