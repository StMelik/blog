import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    className,
    onSelect,
    size = 30,
    selectedStars = 0
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [currentStarsCount, setCurrentStarsCount] = useState(0);

  const { t } = useTranslation();

  const handleHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const handleLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const handleClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.starRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          key={starNumber}
          Svg={StarIcon}
          className={classNames(cls.starIcon, {
            [cls.selected]: isSelected,
            [cls.hovered]: currentStarsCount >= starNumber
          })}
          width={size}
          height={size}
          onMouseEnter={handleHover(starNumber)}
          onMouseLeave={handleLeave}
          onClick={handleClick(starNumber)}
        />
      ))}
    </div>
  );
});
