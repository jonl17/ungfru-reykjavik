import type { NextPage } from 'next'
import { SEO, Logo } from '~/components'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import MockupSvg from '~/components/MockupSvg'

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden ">
      <SEO />
      <div className="min-h-screen px-4 md:max-w-xl 3xl:max-w-3xl mx-auto grid place-content-center">
        <div className="absolute left-5 top-5 md:left-10 md:top-10 h-20 w-20 md:h-28 md:w-28">
          <Logo />
        </div>
        <div className="w-full">
          <MockupSvg />
        </div>
      </div>
    </div>
  )
}

export default Home
