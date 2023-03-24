import Image from 'next/image'

export const HeadPortfolio = () => {
  return (
    <div
      className="
        mt-12
        grid
        w-full
        grid-cols-1
        sm:grid-cols-2
    "
    >
      <div className="flex flex-col justify-between gap-2">
        <p
          className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          "
        >
          Hi, I&apos;m Abel!
        </p>
        <p
          className="
          text-xl
          sm:text-2xl
          md:text-3xl
          "
        >
          A <strong>software developer </strong>
          and <strong>front-end leader</strong> based in Mexico.
        </p>
      </div>
      <div className="relative flex justify-center sm:justify-end">
        <div
          className="
          relative
          mt-5
          aspect-square
          min-w-[12rem]
          max-w-fit
          sm:mt-0
          sm:min-w-[10rem]
          "
        >
          <Image
            priority
            className="
          rounded-full 
          border-[5px]
          border-main-dark
          dark:border-main
          "
            alt="Abel"
            src="/abelaqui.webp"
            fill
          />
        </div>
      </div>
    </div>
  )
}
