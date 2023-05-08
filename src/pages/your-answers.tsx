import { Layout } from "@/components/Layout"
import { StepsLayout } from "@/components/StepsLayout"
import { NavigationButtons } from "@/components/NavigationButtons"
import useFormStore from "@/store/form"

type GivenValueProps = {
  givenValue: string
}

const GivenValue = ({ givenValue }: GivenValueProps) => {
  return (
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'>
      {givenValue}
    </span>
  )
}
const YourAnswers = () => {
  const { inputText, selectedDropdownElement, radioOption, inputTextArea } =
    useFormStore()
  return (
    <Layout>
      <StepsLayout>
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl'>
              Hello{" "}
              {inputText.length !== 0 ? (
                <GivenValue givenValue={`, ${inputText}`} />
              ) : (
                "there"
              )}
              !
            </p>
            {selectedDropdownElement.id !== 0 ? (
              <p className='text-xl'>
                You said your favourite fruit is{" "}
                <GivenValue
                  givenValue={selectedDropdownElement.name
                    .slice(0, -2)
                    .toLowerCase()}
                />
                ! Delicious! 😋
              </p>
            ) : (
              <>
                <p>You haven't picked anything yet! 😱</p>
                <p>Make sure you go back and pick something tasty 😉</p>
              </>
            )}
          </div>
          {radioOption === "yes" ? (
            <p>
              Your additional message: <GivenValue givenValue={inputTextArea} />
            </p>
          ) : (
            <p>You had no additional message!</p>
          )}
          <NavigationButtons back='/step-two' next='/' home />
        </div>
      </StepsLayout>
    </Layout>
  )
}

export default YourAnswers
