import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  /**
   * Телепортируемый элемент
   */
  children: ReactNode;
  /**
   * Куда телепортируется
   */
  container?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({
  children,
  container = document.body
}) => createPortal(children, container);
