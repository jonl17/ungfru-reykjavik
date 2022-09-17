import type { NextPage } from 'next'
import { SEO, Logo } from '~/components'
import MockupSvg from '~/components/MockupSvg'
import {
  title,
  description,
  image,
  favicon,
  facebookUrl,
  instagramUrl,
} from '~/mock'

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden ">
      <SEO
        title={title}
        description={description}
        image={image}
        favicon={favicon}
      />
      <div className="min-h-screen px-4 md:max-w-xl xl:max-w-3xl mx-auto grid items-center">
        <div className="absolute left-5 top-5 md:left-10 md:top-10 h-20 w-20 md:h-24 md:w-24">
          <Logo />
        </div>
        <div className="w-full relative">
          <MockupSvg />
          <div className="h-full w-full absolute top-0 left-0 flex place-items-end">
            <a
              className="h-20 w-full block"
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="facebook link"
            />
            <a
              className="h-20 w-full block"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="instagram-link"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
