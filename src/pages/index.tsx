import type { NextPage } from 'next'
import {
  SEO,
  Logo,
  GoldenMockupSvg,
  MockupSvg,
  SocialMediaLinks,
} from '~/components'
import {
  title,
  description,
  image,
  favicon,
  facebookUrl,
  instagramUrl,
} from '~/mock'

import { motion } from 'framer-motion'

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
        <div className="absolute left-5 top-5 md:left-10 md:top-10 h-12 w-12 md:h-16 md:w-16">
          <Logo />
        </div>
        <div className="w-full relative h-[400px] md:h-[500px] lg:h-[585px]">
          <div className="w-full h-full">
            <motion.div
              className="absolute top-0 h-full w-full"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <MockupSvg className="h-full w-full" />
            </motion.div>
            <motion.div
              className="absolute top-0 h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <GoldenMockupSvg className="h-full w-full" />
            </motion.div>
          </div>
          <SocialMediaLinks platforms={[facebookUrl, instagramUrl]} />
        </div>
      </div>
    </div>
  )
}

export default Home
