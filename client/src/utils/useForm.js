import { useState } from "react";
export function useForm(initials = {}) {
  const [inputs, setInputs] = useState(initials);

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = parseInt(value);
    setInputs({ ...inputs, [name]: value });
  };

  return {
    inputs,
    handleChange,
  };
}
