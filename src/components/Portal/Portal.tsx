import { PortalTarget } from "config";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  target: PortalTarget;
  children: ReactNode;
}

export const Portal = ({ target, children }: PortalProps) => {
  const container = document.getElementById(target) as HTMLElement;

  return createPortal(children, container);
};
