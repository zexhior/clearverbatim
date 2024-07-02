import ButtonComponent from "@/app/component/button"
import { ReactNode } from "react"

interface PropsAccountPlan {
  children?: ReactNode
  title?: ReactNode
  className?: string
}

export default function AccountPlanComponent({
  children,
  title,
  className = "shadow-lg w-1/3 flex flex-col items-center rounded p-2 bg-white",
}: PropsAccountPlan) {
  return (
    <div className={className} style={{ border: "1px #ebebeb solid" }}>
      {title}
      {children}
    </div>
  )
}
