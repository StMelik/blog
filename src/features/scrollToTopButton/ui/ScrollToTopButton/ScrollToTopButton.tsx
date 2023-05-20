import CircleIcon from '@/shared/assets/icons/circle-up.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Icon
      className={classNames('', {}, [className])}
      width={32}
      height={32}
      Svg={CircleIcon}
      clickable
      onClick={handleClick}
    />
  );
});
