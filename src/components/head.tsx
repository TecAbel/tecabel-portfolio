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
      <div className="flex flex-col justify-center gap-4 items-center">
        <p
          className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          "
        >
          Hi, I&apos;m Abel!
        </p>
        <h1
          className="
          text-2xl
          text-primary
          dark: text-primary-dark
          sm:text-2xl
          md:text-3xl
          "
        >
          <strong>Tech Consultant </strong>
        </h1>
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
          border-primary
          dark:border-primary
          "
            alt="Abel"
            src="/AbelardoAqui.jpg"
            fill
          />
        </div>
      </div>
    </div>
  )
}
