import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/burger.svg';
import GridIconDeprecated from '@/shared/assets/icons/grid-24-24.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import GridIcon from '@/shared/assets/icons/tile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { memo } from 'react';

import { ToggleFeature, toggleFeatures } from '@/shared/lib/features';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { getHStack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => GridIcon,
      off: () => GridIconDeprecated
    })
  },
  {
    view: ArticleView.LIST,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated
    })
  }
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const handleViewClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <Card
          className={classNames(cls.articleViewSelectorRedesigned, {}, [
            className,
            getHStack({ gap: '8' })
          ])}
          border='round'
        >
          {viewTypes.map((viewType) => (
            <Icon
              Svg={viewType.icon}
              clickable
              onClick={handleViewClick(viewType.view)}
              className={classNames('', {
                [cls.notSelected]: view !== viewType.view
              })}
            />
          ))}
        </Card>
      }
      off={
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              key={viewType.view}
              theme={ButtonTheme.CLEAR}
              onClick={handleViewClick(viewType.view)}
            >
              <IconDeprecated
                width={24}
                height={24}
                className={classNames('', {
                  [cls.notSelected]: view !== viewType.view
                })}
                Svg={viewType.icon}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
});
