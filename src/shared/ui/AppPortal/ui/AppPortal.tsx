import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface AppPortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const AppPortal = ({
  children,
  element = document.body,
}: AppPortalProps) => {
  return createPortal(children, element);
};
