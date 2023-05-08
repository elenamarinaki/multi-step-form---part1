type VerticalLineProps = {
  active: boolean
}

export const VerticalLine = ({ active }: VerticalLineProps) => {
  return (
    <div
      className={`w-[4px] h-[30px] ml-2 rounded ${
        active
          ? "bg-gradient-to-r from-sky-400 via-30% to-emerald-400 to-90%"
          : "bg-sky-300 opacity-25"
      } `}
    ></div>
  )
}
