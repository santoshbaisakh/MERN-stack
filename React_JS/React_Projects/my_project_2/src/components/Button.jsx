function Button({ icon, text, outline }) {
  return (
    <button
      className={`
        cursor-pointer
      flex items-center justify-center gap-2
      rounded
      py-3
      px-4
      text-sm
      font-semibold
      transition
      duration-300
      w-full
      ${
        outline
          ? "border border-black text-black"
          : "bg-black text-white hover:bg-gray-800"
      }
      `}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;