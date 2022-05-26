import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { HOME_TITLE } from '../lib/constants'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{HOME_TITLE}</title>
        </Head>
        <Container>
          <Intro />

          <h2 className="text-4xl mb-5 md:pt-7">¿Qué es Esdocu?</h2>
          <p className="text-lg mb-2">Esdocu es un proyecto de traducción al español de documentación de tecnologías open source, iniciando por algunas de las tecnologías más populares para el desarrollo web y de aplicaciones móviles.</p>
          <p className="text-lg mb-2">El proyecto pretende no solo realizar las traducciones, sino también mantenerlas siempre actualizadas y sincronizadas con la versión original en inglés.</p>
          <p className="text-lg mb-2">Esdocu es un proyecto open source, por lo que cualquiera que lo desee puede colaborar a través de los repositorios en nuestra cuenta de <a href="https://github.com/esdocu" target="_blank" className="text-sky-600 hover:text-sky-800">GitHub</a>.</p>

          <h2 className="text-4xl mb-5 mt-12">Traducciones finalizadas</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">
              <a href="https://getbootstrap.esdocu.com" target="_blank" className="text-sky-600 hover:text-sky-800">
                Bootstrap en Español
              </a>
            </li>
          </ul>

          <h2 className="text-4xl mb-5 mt-12">Traducciones en proceso</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">
              <a href="https://github.com/esdocu/tailwind" target="_blank" className="text-sky-600 hover:text-sky-800">
                Tailwind CSS en Español
              </a>
            </li>
            <li className="text-lg mb-2">
              <a href="https://github.com/esdocu/chartjs" target="_blank" className="text-sky-600 hover:text-sky-800">
                Chart.js en Español
              </a>
            </li>
          </ul>

          <h2 className="text-4xl mb-5 mt-12">Siguientes traducciones</h2>
          <p className="text-lg mb-2"></p>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">
              Puedes proponer las siguientes traducciones{' '}
              <a href="https://www.instagram.com/fab.k.dev/" target="_blank" className="text-sky-600 hover:text-sky-800">
                enviándome un DM
              </a>
            </li>
          </ul>

          <h2 className="text-4xl mb-5 mt-12">¿Cómo mantenemos las traducciones actualizadas?</h2>
          <p className="text-lg mb-2">Luego de finalizar la primera traducción completa de una documentación, nuestro sistema monitorea las modificaciones (commits) que se realicen en el repositorio original en inglés. En ese momento analizamos el commit y aplicamos los mismos cambios (si están relacionados con el contenido de documentación) al repositorio de la traducción al español.</p>
          <p className="text-lg mb-2">De esta manera las traducciones se mantienen siempre actualizadas y sincronizadas con la versión en inglés.</p>

          <h2 className="text-4xl mb-5 mt-12">Política de publicidad no intrusiva</h2>
          <p className="text-lg mb-2">Intentamos que las publicidades mostradas en las traducciones se encuentren integradas en el contenido y que puedan visualizarse sin saturar al lector. </p>
          <p className="text-lg mb-2">Aunque sería ideal un contenido limpio y sin publicidades, este proyecto se financia de esta manera y con los aportes de los donantes.</p>
          <p className="text-lg mb-2">¡Gracias por tu comprensión y apoyo!</p>

          <h2 className="text-4xl mb-5 mt-12" id="donaciones">Donaciones</h2>
          <p className="text-lg mb-2">Puedes apoyar este proyecto con una donación a través del siguiente enlace, o adquiriendo uno de los servicios recomendados a través de las publicidades que se muestran en el contenido traducido:</p>
          <p className="text-lg mb-12">
            <a href="https://www.buymeacoffee.com/esdocu" target="_blank" className="text-sky-600 hover:text-sky-800">
              Buy me a Coffee
            </a>
          </p>


          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
