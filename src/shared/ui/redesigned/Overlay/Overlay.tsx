import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  /**
   * Вызывается при клике на оверлей
   */
  onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;

  return (
    <div
      className={classNames(cls.overlay, {}, [className])}
      onClick={onClick}
    />
  );
});
