import type { NextPage } from 'next'
import {
  SEO,
  Logo,
  GoldenMockupSvg,
  MockupSvg,
  SocialMediaLinks,
  LogoTitle,
  Button,
  Contact,
  FlyingDutchman,
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
        <div className="w-full relative h-full">
          <div className="h-full w-full max-w-lg mx-auto flex flex-col justify-between">
            <div className="grid h-full place-content-center mb-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full max-w-md h-full relative mb-4"
              >
                <LogoTitle className="w-full h-full" />
              </motion.div>
              <FlyingDutchman />
              <a href="#">
                <Button>Bóka tíma</Button>
              </a>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
