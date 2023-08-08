import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-4 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          <Link className="inline sm:hidden" href="/politica-de-cookies">
            Cookies
          </Link>
          <Link className="hidden sm:inline" href="/politica-de-cookies">
            Políticas de Cookies
          </Link>
          <span className="mx-2">|</span>
          <Link className="inline sm:hidden" href="/politica-de-privacidad">
            Privacidad
          </Link>
          <Link className="hidden sm:inline" href="/politica-de-privacidad">
            Políticas de Privacidad
          </Link>
          <span className="mx-2">|</span>
          <Link className="inline sm:hidden" href="/aviso-legal">
            Legal
          </Link>
          <Link className="hidden sm:inline" href="/aviso-legal">
            Aviso Legal
          </Link>
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div className="hidden sm:block">{` • `}</div>
          <Link href="/" className="hidden sm:block">
            {siteMetadata.title}
          </Link>
        </div>
      </div>
    </footer>
  )
}
