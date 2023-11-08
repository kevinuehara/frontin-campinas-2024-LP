interface ButtonProps {
  className?: string;
}

export const Button = ({ className }: ButtonProps) => {
  return (
    <button
      className={`bg-indigo-600 hover:bg-indigo-400 text-white font-semibold rounded-lg text-xl p-4 ${className}`}
    >
      Submeta sua palestra!
    </button>
  );
};
