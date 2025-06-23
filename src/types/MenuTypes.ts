import type { ReactNode } from "react";

export interface MenuTypes {
  title: string;
  path: string;
  icon?: ReactNode;
  roles: string[];
}
