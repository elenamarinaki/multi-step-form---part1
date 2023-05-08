import useFormStore from "@/store/form";

type TextAreaProps = {
  labelText: string;
};

export const TextArea = ({ labelText }: TextAreaProps) => {
  const { inputTextArea, setInputTextArea } = useFormStore();

  return (
    <>
      <label
        htmlFor="text"
        className="text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      >
        {labelText}
      </label>
      <textarea
        placeholder={inputTextArea}
        onChange={(e) => setInputTextArea(e.target.value)}
        className="bg-transparent border-2 rounded-lg p-2 text-[18px] min-h-[100px] max-h-[250px] max-w-[350px] lg:max-w-[500px]"
      />
    </>
  );
};
