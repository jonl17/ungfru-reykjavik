import { platform } from 'os'

type Props = {
  platforms: string[]
}

export default function SocialMediaLinks({ platforms }: Props) {
  return (
    <div className="h-full w-full absolute top-0 left-0 flex place-items-end">
      {platforms.map((url, key) => (
        <a
          key={key}
          className="h-20 w-full block"
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label="facebook link"
        />
      ))}
    </div>
  )
}
