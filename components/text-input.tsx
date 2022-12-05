type Props = {
  placeholder: string;
  inputType: string;
};

const TextInput = ({ placeholder, inputType }: Props) => {
  return (
    <div className="w-full">
      <input
        type={inputType}
        className="outline-none w-full bg-lightGray p-3 rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
