import { FormHTMLAttributes, ReactNode } from "react"

interface PropsForm extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
  className?: string | undefined
}

export default function FormComponent({
  children,
  className = "w-full flex flex-col gap-2",
  ...props
}: PropsForm) {
  return (
    <form className={className} {...props}>
      {children}
    </form>
  )
}
