"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <>
      <button
        className="p-2 bg-amber-500 rounded-2xl cursor-pointer"
        onClick={() => router.back()}
      >
        Back
      </button>
    </>
  );
};

export default BackButton;
