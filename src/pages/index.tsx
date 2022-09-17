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

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const Home: NextPage = () => {
  const [active, setActive] = useState(false)

  console.log(active)

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
        <div className="w-full relative h-[400px] md:h-[500px]">
          <div className="absolute top-0 h-full w-full">
            <motion.div className="w-full h-full relative">
              <MockupSvg className="h-full w-full" />
            </motion.div>
            <AnimatePresence>
              {active && (
                <motion.div
                  className="absolute top-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <GoldenMockupSvg className="h-full w-full" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <SocialMediaLinks platforms={[facebookUrl, instagramUrl]} />
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="relative top-16 md:top-20 h-36 md:h-40 max-w-lg mx-auto w-full z-50"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Home
