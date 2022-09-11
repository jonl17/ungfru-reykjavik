import type { NextPage } from 'next'
import { SEO, Logo } from '~/components'
import MaskedTitle from '~/components/MaskedTitle'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen max-w-lg mx-auto grid place-content-center">
        <div className="absolute left-10 top-10">
          <Logo />
        </div>
        <MaskedTitle className="page-title-top-tweak-mobile md:page-title-top-tweak">
          Ungfrú
        </MaskedTitle>
        <MaskedTitle>Reykjavík</MaskedTitle>
      </div>
    </>
  )
}

export default Home
