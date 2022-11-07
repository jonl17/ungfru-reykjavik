import type { NextPage } from 'next'
import {
  SEO,
  Logo,
  GoldenMockupSvg,
  MockupSvg,
  SocialMediaLinks,
  LogoTitle,
  Button,
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full relative"
            >
              <LogoTitle className="w-full h-full" />
            </motion.div>
            <a>
              <Button>Bóka tíma</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
