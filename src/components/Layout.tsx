import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <section className='py-16 px-4 flex justify-center items-center mt-[24vh]'>
      {children}
    </section>
  )
}
