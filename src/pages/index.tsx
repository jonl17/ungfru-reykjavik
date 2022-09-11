import type { NextPage } from 'next'
import { SEO } from '~/components'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen max-w-lg mx-auto grid place-content-center">
        <div className="text-center">
          <h1 className="text-10vw/1.1 uppercase">ungfrú reykjavík</h1>
          <p className="text-28px/1">skvísaðu þig upp</p>
        </div>
      </div>
    </>
  )
}

export default Home
