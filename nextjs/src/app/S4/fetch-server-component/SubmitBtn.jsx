"use client";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="p-4 btn-success w-1/12" disabled={pending}>
      {pending ? "..." : "submit"}
    </button>
  );
};

export default SubmitBtn;
