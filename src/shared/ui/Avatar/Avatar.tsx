import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className, src, alt, size
  } = props;

  const style = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100
    }),
    [size]
  );

  return <img className={classNames(cls.avatar, {}, [className])} src={src} alt={alt} style={style} />;
};
