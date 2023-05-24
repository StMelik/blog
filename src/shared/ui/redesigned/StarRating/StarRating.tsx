import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon as IconDeprecated } from '../../deprecated/Icon/Icon';
import { ToggleFeature, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';

interface StarRatingProps {
  className?: string;
  /**
   * Вызывается при выборе кол-ва звезд
   */
  onSelect?: (starsCount: number) => void;
  /**
   * Размер звезд
   */
  size?: number;
  /**
   * Кол-во выбранных звезд
   */
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const { className, onSelect, size = 30, selectedStars = 0 } = props;

  const [isSelected, setIsSelected] = useState(!!selectedStars);
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);

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
    <div
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => cls.starRatingRedesigned,
          off: () => cls.starRating
        }),
        {},
        [className]
      )}
    >
      {stars.map((starNumber) => {
        const commonProps = {
          key: starNumber,
          Svg: StarIcon,
          className: classNames(cls.starIcon, {
            [cls.selected]: isSelected,
            [cls.hovered]: currentStarsCount >= starNumber
          }),
          width: size,
          height: size,
          onMouseEnter: handleHover(starNumber),
          onMouseLeave: handleLeave,
          onClick: handleClick(starNumber),
          'data-testid': `StarRating.${starNumber}`,
          'data-selected': currentStarsCount >= starNumber
        };

        return (
          <ToggleFeature
            feature='isAppRedesigned'
            on={
              <Icon
                clickable={!isSelected}
                {...commonProps}
              />
            }
            off={<IconDeprecated {...commonProps} />}
          />
        );
      })}
    </div>
  );
});
