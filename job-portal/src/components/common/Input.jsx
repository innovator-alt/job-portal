function Input({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
}) {
  return (
    <div className="mb-5">
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: `${label} is required`,
        })}
        className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default Input;