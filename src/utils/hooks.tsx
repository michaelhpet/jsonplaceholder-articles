import { FormEvent, useState } from "react";
import { createPortal } from "react-dom";
import { NotifyType } from "./types";
import { useLayoutContext } from "@/layout/context";

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

export function useNotify() {
  const { setPortal } = useLayoutContext();

  const Message = (props: { type: NotifyType; message: string }) => {
    return (
      <div
        className="fixed top-6 left-[50%] translate-x-[-50%] flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-[#242424] shadow-lg animate-[alert_200ms_forwards]"
        onClick={() => setPortal(null)}
      >
        <span
          className={`w-6 h-6 text-base leading-4 rounded-full flex items-center justify-center text-center text-white font-black ${
            props.type === "success"
              ? "bg-green-500 rotate-[-120deg] scale-x-[-1]"
              : "bg-red-500 rotate-45"
          }`}
        >
          {props.type === "success" ? "7" : "+"}
        </span>
        {props.message}
      </div>
    );
  };

  const show = (type: NotifyType, message: string) => {
    const portal = createPortal(
      <Message type={type} message={message} />,
      document.body
    );
    setPortal(portal);
    const timeoutId = setTimeout(() => {
      setPortal(null);
      clearTimeout(timeoutId);
    }, 5000);
  };

  const notify = {
    success: (message: string) => show("success", message),
    error: (message: string) => show("error", message),
  };
  return notify;
}
