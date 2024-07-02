import { Attributes, ButtonHTMLAttributes, ReactNode } from "react"

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
}

const ButtonComponent = ({
  children,
  className = "bg-blue-600 text-white p-2 rounded",
  ...props
}: PropsButton) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export default ButtonComponent
