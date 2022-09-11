import cn from 'classnames'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function MaskedTitle({ children, className }: Props) {
  return (
    <h1
      className={cn(
        'text-60px/1.5 md:text-120px/1.6 uppercase text-center text-transparent gold-bg',
        className
      )}
    >
      {children}
    </h1>
  )
}
