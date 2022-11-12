import cn from 'classnames'
import { facebookUrl, googleMapsTargetUrl, instagramUrl } from '~/mock'

export default function Contact() {
  const address = ['Kolagata', 'Hafnartorg', '101 Reykjavík']
  const contact = [
    {
      label: 'hallo@ungfrureykjavik.is',
      href: 'mailto:hallo@ungfrureykjavik.is',
    },
    { label: '+354 551 4908', href: 'tel:003545514908' },
  ]
  const socialMedia = [
    {
      label: 'facebook',
      href: facebookUrl,
    },
    {
      label: 'instagram',
      href: instagramUrl,
    },
  ]

  return (
    <div className="h-16 mb-10 flex gap-5 md:gap-3 flex-col justify-between text-15px/1 md:text-18px/23">
      <a
        href={googleMapsTargetUrl}
        target="_blank"
        rel="noreferrer"
        className="flex justify-between"
      >
        {address.map((item, key) => (
          <p className="uppercase" key={key}>
            {item}
          </p>
        ))}
      </a>
      <div className="flex justify-between">
        {contact.map((item, key) => (
          <a
            className={cn('md:tracking-[0.18rem]', {
              'font-edit-italic': key === 0,
            })}
            key={key}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex justify-between">
        {socialMedia.map((item, key) => (
          <a
            className={cn('tracking-[0.5rem] md:tracking-[0.93rem] italic', {
              '-mr-3': key === socialMedia.length - 1,
            })}
            key={key}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}
