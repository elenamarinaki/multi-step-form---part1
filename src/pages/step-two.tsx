import { Layout } from "@/components/Layout"
import { StepsLayout } from "@/components/StepsLayout"
import { NavigationButtons } from "@/components/NavigationButtons"
import { RadioInput } from "@/components/inputs/RadioInput"
import { TextArea } from "@/components/inputs/TextArea"
import useFormStore from "@/store/form"

const StepTwo = () => {
  const { radioOption } = useFormStore()
  // TODO
  /**
   * useEffect to reset the text area field when radioOption === 'no'
   */

  return (
    <Layout>
      <StepsLayout>
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
          <div className='flex flex-col gap-8'>
            <RadioInput question='Anything else to add?' />
            {radioOption === "yes" ? (
              <TextArea labelText='Please write here ⬇' />
            ) : null}
          </div>
          <NavigationButtons back='/step-one' next='/your-answers' />
        </div>
      </StepsLayout>
    </Layout>
  )
}

export default StepTwo
