import { ReactNode } from "react"

interface PropsCardCenter {
  children: ReactNode
}

export default function CardCenter({ children }: PropsCardCenter) {
  return (
    <div className="cardcenter rounded w-4/6 h-3/4 mx-auto flex overflow-hidden">
      {children}
    </div>
  )
}
