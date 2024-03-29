import { Article } from '../../model/types/Article';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleView } from '../../model/consts/articleConsts';
import { ToggleFeature } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  isVirtualized?: boolean;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.GRID ? 9 : 3).fill(1).map((item, index) => (
    <ArticleListItemSkeleton
      className={cls.card}
      key={index}
      view={view}
    />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.LIST,
    target,
    isVirtualized
  } = props;

  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      target={target}
      key={article.id}
      className={cls.card}
      article={article}
      view={view}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text
          size={TextSize.L}
          title={t('Статьи не найдены')}
        />
      </div>
    );
  }

  // добавить виртуальный список
  return (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <HStack
          gap='16'
          wrap='wrap'
          className={classNames(cls.articleListRedesigned, {}, [
            className,
            cls[view]
          ])}
          data-testid='ArticleList'
        >
          {isVirtualized ? <span /> : articles.map(renderArticle)}

          {isLoading && getSkeletons(view)}
        </HStack>
      }
      off={
        <div
          className={classNames(cls.articleList, {}, [className, cls[view]])}
          data-testid='ArticleList'
        >
          {isVirtualized ? <span /> : articles.map(renderArticle)}

          {isLoading && getSkeletons(view)}
        </div>
      }
    />
  );
});
