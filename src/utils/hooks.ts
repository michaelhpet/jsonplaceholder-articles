import { FormEvent, useState } from "react";

export function useForm<T extends object>() {
  const [errors, setErrors] = useState({} as Record<keyof T, string>);

  const handleSubmit =
    (submit: (data: T) => void) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const elements = form.elements;
      const inputs = form.querySelectorAll("input, textarea");
      const data: Record<string, unknown> = {};
      inputs.forEach((input) => {
        const attribute = input.getAttribute("name");
        if (attribute) {
          const value =
            (elements.namedItem(String(attribute)) as HTMLInputElement)
              ?.value ?? null;
          data[attribute] = value;
        }
      });
      const errors = Object.entries(data).reduce((errors, [key, value]) => {
        if (!value) errors[key] = `Please enter ${key.replace(/_/g, " ")}`;
        return errors;
      }, {} as Record<string, string>);
      setErrors(errors as Record<keyof T, string>);
      if (Object.values(errors).some(Boolean)) return;
      return submit(data as T);
    };

  const clearError = (name: keyof T) => {
    setErrors((e) => ({ ...e, [name]: null }));
  };

  return { errors, handleSubmit, clearError };
}
