import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

/**
 * @deprecated
 */
export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, borderRadius } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius
  };

  return (
    <div
      className={classNames(cls.skeleton, {}, [className])}
      style={style}
    />
  );
});
