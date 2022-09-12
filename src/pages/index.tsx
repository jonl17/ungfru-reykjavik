import type { NextPage } from 'next'
import { useState } from 'react'
import { SEO, Logo } from '~/components'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen max-w-lg mx-auto grid place-content-center">
        <div className="absolute left-10 top-10">
          <Logo />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-60px/1.5 md:text-120px/1.6 uppercase text-center text-transparent gold-bg page-title-top-tweak-mobile md:page-title-top-tweak">
            Ungfrú
          </h1>
          <h1 className="text-60px/1.5 md:text-120px/1.6 uppercase text-center text-transparent gold-bg">
            Reykjavík
          </h1>
        </motion.div>
      </div>
    </>
  )
}

export default Home
