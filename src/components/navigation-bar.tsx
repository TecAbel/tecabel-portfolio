import { FC } from "react"

export const NavigationBar: FC = () => {
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
      <div className="absolute z-10 p-2 grid-cols-4">
        <div className="col-span-3">navigation bar</div>
        <div>
          <button className="rounded-sm bg">

          </button>
        </div>
      </div>
    </div>
  )
}
