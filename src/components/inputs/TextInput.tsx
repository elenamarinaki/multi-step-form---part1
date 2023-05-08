import useFormStore from "@/store/form";

type TextInputProps = {
  labelText?: string;
};

export const TextInput = ({ labelText }: TextInputProps) => {
  const { inputText, setInputText } = useFormStore();

  return (
    <>
      <label
        htmlFor="text"
        className="text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      >
        {labelText}
      </label>
      <input
        type="text"
        name="text"
        placeholder={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="bg-transparent border-2 rounded-lg p-2 text-[18px] lg:text-[22px]"
      />
    </>
  );
};
