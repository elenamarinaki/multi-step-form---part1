import { useState } from "react"
import { RadioGroup } from "@headlessui/react"
import useFormStore from "@/store/form"

type RadioInputProps = {
  question: string
}

export const RadioInput = ({ question }: RadioInputProps) => {
  const { radioOption, setRadioOption } = useFormStore()

  return (
    <RadioGroup value={radioOption} onChange={setRadioOption}>
      <RadioGroup.Label className='text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        {question}
      </RadioGroup.Label>
      <div className='flex gap-28 mt-4'>
        <RadioGroup.Option value='yes'>
          {({ checked }) => (
            <span
              className={`text-[18px] px-2 py-1 rounded-md cursor-pointer ${
                checked ? "bg-indigo-400" : ""
              }`}
            >
              Yes
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value='no'>
          {({ checked }) => (
            <span
              className={`text-[18px] px-2 py-1 rounded-md cursor-pointer ${
                checked ? "bg-indigo-400" : ""
              }`}
            >
              No
            </span>
          )}
        </RadioGroup.Option>
      </div>
    </RadioGroup>
  )
}
