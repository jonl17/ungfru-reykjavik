import Head from 'next/head'

type Props = {
  title: string
  description: string
  image: string
}

export default function SEO({ title, description, image }: Props) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
