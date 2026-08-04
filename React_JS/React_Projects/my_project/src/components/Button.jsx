function Button({ text, bgColor, textColor, border }) {
  return (
    <button
      className={`px-6 py-2 font-semibold rounded cursor-pointer ${bgColor} ${textColor} ${border}`}
    >
      {text}
    </button>
  );
}

export default Button;