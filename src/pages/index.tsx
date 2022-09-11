import type { NextPage } from 'next'
import { SEO, Logo } from '~/components'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen max-w-lg mx-auto grid place-content-center">
        <div className="absolute left-10 top-10">
          <Logo />
        </div>
        <div className="text-center px-4">
          <h1 className="text-10vw/1.1 uppercase">ungfrú reykjavík</h1>
          <p className="text-28px/1">skvísaðu þig upp</p>
        </div>
      </div>
    </>
  )
}

export default Home
