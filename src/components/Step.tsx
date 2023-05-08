import { ReactNode } from "react"
import { NavigationButtons } from "./NavigationButtons"

type StepProps = {
  children: ReactNode
  back: string
  next: string
  home?: boolean
}

export const Step = ({ children, back, next, home }: StepProps) => {
  return (
    <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
      {children}
      <NavigationButtons back={back} next={next} home={home} />
    </div>
  )
}
