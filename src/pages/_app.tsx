import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-orange overscroll-contain">
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
