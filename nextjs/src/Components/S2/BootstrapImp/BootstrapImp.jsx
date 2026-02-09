"use client";

import { useEffect } from "react";

const BootstrapImp = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return null
};

export default BootstrapImp;
