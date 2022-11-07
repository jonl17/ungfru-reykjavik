import cn from 'classnames'
import { facebookUrl, instagramUrl } from '~/mock'

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
    <div className="h-16 mb-5 flex flex-col justify-between">
      <div className="flex justify-between">
        {address.map((item, key) => (
          <p className="uppercase" key={key}>
            {item}
          </p>
        ))}
      </div>
      <div className="flex justify-between">
        {contact.map((item, key) => (
          <a
            className={cn('tracking-[0.18rem]', {
              'font-edit-italic': key === 0,
            })}
            key={key}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex justify-between -mr-3">
        {socialMedia.map((item, key) => (
          <a className="tracking-[0.93rem] italic" key={key} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}
