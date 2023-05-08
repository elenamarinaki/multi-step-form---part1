import { create } from "zustand"

type FormStore = {
  inputText: string
  setInputText: (value: string) => void
  selectedDropdownElement: { id: number; name: string }
  setSelectedDropdownElement: ({
    id,
    name,
  }: {
    id: number
    name: string
  }) => void
  radioOption: string
  setRadioOption: (value: string) => void
  inputTextArea: string
  setInputTextArea: (value: string) => void
}

const useFormStore = create<FormStore>()((set) => ({
  inputText: "",
  setInputText: (value) => set({ inputText: value }),
  selectedDropdownElement: { id: 0, name: "Pick one!" },
  setSelectedDropdownElement: ({ id, name }) =>
    set({ selectedDropdownElement: { id, name } }),
  radioOption: "no",
  setRadioOption: (value) => set({ radioOption: value }),
  inputTextArea: "",
  setInputTextArea: (value) => set({ inputTextArea: value }),
}))

export default useFormStore
