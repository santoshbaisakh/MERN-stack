function InputField({ label, type = "text" }) {
  return (
    <div className="relative mt-6">

      <label className="absolute left-3 -top-3 bg-white px-2 text-sm font-semibold">
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          rows="7"
          className="w-full border border-gray-400 rounded p-3 focus:outline-none focus:border-black"
        />
      ) : (
        <input
          type={type}
          className="w-full border border-gray-400 rounded p-3 focus:outline-none focus:border-black"
        />
      )}

    </div>
  );
}

export default InputField;