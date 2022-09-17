import Head from 'next/head'

type Props = {
  title: string
  description: string
  image: string
  favicon: string
}

export default function SEO({ title, description, image, favicon }: Props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{title}</title>
      <link rel="icon" href={favicon} type="image/png" />

      <meta property="description" name="description" content={description} />

      <meta property="og:image" name="og:image" content={image} />
      <meta
        property="og:description"
        name="og:description"
        content={description}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
