import Image from 'next/image'

export const HeadPortfolio = () => {
  return (
    <div className="mt-12 grid w-full grid-cols-1 sm:grid-cols-2">
      <div className="flex flex-col justify-between">
        <p
          className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          "
        >
          Hi, i&apos;m Abel!
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
      <div className="flex sm:justify-end justify-center">
        <Image
          className="
          rounded-full 
          border-[5px]
          border-main-dark
          dark:border-main
          "
          alt="Abel"
          src="/abelaqui.jpg"
          width={170}
          height={170}
        />
      </div>
    </div>
  )
}
