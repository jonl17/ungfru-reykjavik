type Props = {
  text: string
}

export default function FlyingDutchman({ text }: Props) {
  return (
    <div className="h-36 font-edit-italic text-28px/1 overflow-hidden">
      <p className="rotate-[11.5deg] origin-left flex justify-between animate-flying-dutchman">
        {text.split('').map((char, key) => (
          <span key={key}>{char}</span>
        ))}
      </p>
    </div>
  )
}
