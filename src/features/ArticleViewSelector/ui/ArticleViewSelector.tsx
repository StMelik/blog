import { ArticleView } from 'entities/Article';
import { memo } from 'react';
import GridIcon from 'shared/assets/icons/grid-24-24.svg';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon
  }
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const handleViewClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={handleViewClick(viewType.view)}
        >
          <Icon
            className={classNames('', { [cls.notSelected]: view !== viewType.view })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});
