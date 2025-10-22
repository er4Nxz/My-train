import type { ReactNode } from "react";

type PropsSvg = {
  children: ReactNode;
  svg: boolean;
  png?: never;
};
type PropsPng = {
  children: ReactNode;
  png: boolean;
  svg?: never;
};
export type PropsValue = PropsPng | PropsSvg;
