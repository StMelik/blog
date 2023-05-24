import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import { AppImage } from '../../redesigned/AppImage';
import { Text } from '../Text';
import { HStack } from '../Stack';

interface AvatarProps {
  className?: string;
  /**
   * Ссылка на фото
   */
  src?: string;
  alt?: string;
  /**
   * Размер фото
   */
  size?: number;
  /**
   * Имя профиля
   */
  username?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, alt = 'Аватар', size = 100, username } = props;

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
      Svg={UserIcon}
      width={size}
      height={size}
    />
  );

  const image = (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(cls.avatar, {}, [className])}
      src={src}
      alt={alt}
      style={style}
    />
  );

  if (username) {
    return (
      <HStack gap='8'>
        {image}
        <Text
          text={username}
          bold
        />
      </HStack>
    );
  }

  return image;
};
