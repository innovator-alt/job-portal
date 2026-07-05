import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function PasswordInput({
  label,
  placeholder,
  register,
  name,
  error,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-5">
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
          className="w-full rounded-lg border p-3 pr-12 outline-none focus:border-blue-600"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-3"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default PasswordInput;