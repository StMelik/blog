import { FC, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Overlay } from '../../redesigned/Overlay';
import { Portal } from '../../redesigned/Portal';
import { toggleFeatures } from '@/shared/lib/features';

interface ModalProps {
  className?: string;
  children: ReactNode;
  /**
   * Флаг открытия
   */
  isOpen?: boolean;
  /**
   * Вызывается при закрытии
   */
  onClose?: () => void;
  /**
   * Удаляет из DOM при закрытии
   */
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  lazy
}) => {
  const { theme } = useTheme();

  const { close, isClosing, isMounted } = useModal({ onClose, isOpen });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal container={document.getElementById('app') ?? document.body}>
      <div
        className={classNames(cls.modal, mods, [
          className,
          theme,
          toggleFeatures({
            name: 'isAppRedesigned',
            on: () => cls.modalNew,
            off: () => cls.modalOld
          })
        ])}
      >
        <Overlay onClick={close} />

        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
