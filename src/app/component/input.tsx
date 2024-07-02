import { InputHTMLAttributes } from "react"

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export default function InputComponent({
  className = "text-sm border-2 p-2 rounded",
  ...props
}: PropsInput) {
  return (
    <>
      <input className={className} {...props} />
    </>
  )
}
