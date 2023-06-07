import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const MyLinksSection = () => {
  return (
    <div className="mt-3 w-full">
      <p className="section-title">My links</p>
      <div className="mt-5 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-14">
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
          <FaGithub className="text-3xl text-gray-800" /> My Github
        </Link>
      </div>
    </div>
  )
}
