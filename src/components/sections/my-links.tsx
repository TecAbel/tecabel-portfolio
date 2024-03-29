import Link from 'next/link'
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa'

export const MyLinksSection = () => {
  return (
    <div className="mt-8 w-full">
      <p className="section-title">My links</p>
      <div className="mt-5 grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-4">
        <Link className="my-link enphasis font-bold" href={'/jobs'}>
          <FaCode className=" text-3xl" />{' '}
          <span className="underline">My jobs</span>
        </Link>
        <Link
          className="my-link"
          passHref={false}
          target="_blank"
          href={'https://www.linkedin.com/in/abelardo-aqui-arroyo-dev'}
        >
          <FaLinkedin className="icon-linkedin text-3xl" /> My Linkedin Profile
        </Link>
        <Link
          passHref={false}
          className="my-link"
          target="_blank"
          href={'https://github.com/TecAbel'}
        >
          <FaGithub className="icon-github text-3xl" /> My Github
        </Link>
      </div>
    </div>
  )
}
