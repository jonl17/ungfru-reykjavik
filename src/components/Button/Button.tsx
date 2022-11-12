type Props = {
  children: React.ReactNode
}

export default function Button({ children }: Props) {
  return (
    <span className="transition-all duration-500 text-28px/1 uppercase bg-black text-orange px-5 py-3 w-full grid place-items-center shadow-[0_0_0_2px_black] hover:text-black hover:bg-orange">
      <p className="mt-1">{children}</p>
    </span>
  )
}
