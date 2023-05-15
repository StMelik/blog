import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import { AppImage } from '../../redesigned/AppImage';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  fallbackInverted?: boolean;
}

/**
 * @deprecated
 */
export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    alt = 'Аватар',
    size = 100,
    fallbackInverted
  } = props;

  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size
    }),
    [size]
  );

  const fallback = (
    <Skeleton
      width={size}
      height={size}
      borderRadius='50%'
    />
  );

  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      Svg={UserIcon}
      width={size}
      height={size}
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(cls.avatar, {}, [className])}
      src={src}
      alt={alt}
      style={style}
    />
  );
};
