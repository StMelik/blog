import { useTheme } from 'app/providers/ThemeProvider';
import {
  FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
  className, children, isOpen, onClose
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const { theme } = useTheme();

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent): any => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, cls[theme]])}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
