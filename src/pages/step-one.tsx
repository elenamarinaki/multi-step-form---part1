import { Layout } from "@/components/Layout"
import { StepsLayout } from "@/components/StepsLayout"
import { Step } from "@/components/Step"
import { TextInput } from "@/components/inputs/TextInput"
import { DropdownInput } from "@/components/inputs/DropdownInput"

const fruits = [
  { id: 1, name: "Bananas 🍌" },
  { id: 2, name: "Strawberries 🍓" },
  { id: 3, name: "Kiwis 🥝" },
  { id: 4, name: "Blueberries 🫐" },
  { id: 5, name: "Watermelon 🍉" },
]

const StepOne = () => {
  return (
    <Layout>
      <StepsLayout>
        <Step back='/' next='/step-two'>
          <div className='flex flex-col gap-4'>
            <TextInput labelText='How should I call you?' />
            <DropdownInput
              question='Which one is your favourite fruit?'
              data={fruits}
            />
          </div>
        </Step>
      </StepsLayout>
    </Layout>
  )
}

export default StepOne
