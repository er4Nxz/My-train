"use client";

import { notFound, usePathname } from "next/navigation";
import { useState } from "react";

const S1template = () => {
  const pathname = usePathname().slice(4);
  const [state , setState] = useState(null)

  if (pathname > 100) {
      return notFound();
    }
  return (
    <>
      <input type="text" className="bg-white " value={pathname} onChange={(e)=>setState(e.target.value)} />
    </>
  );
};

export default S1template;
