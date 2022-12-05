type Props = {
  text: string;
  primary?: boolean;
};

const button = ({ primary = false, text }: Props) => {
  return (
    <button
      className={`p-2 ${
        primary ? "bg-primary text-white" : ""
      } w-full rounded-md`}
    >
      {text}
    </button>
  );
};

export default button;
