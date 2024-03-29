import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { getRouteArticleDetails } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArticleBlockType,
  ArticleView
} from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/Article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleListItemProps } from '../ArticleListItem';
import cls from './ArticleListItemDeprecated.module.scss';

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;

  const { t } = useTranslation();

  const types = (
    <Text
      className={cls.types}
      text={article.type.join(', ')}
    />
  );

  const views = (
    <>
      <Text
        className={cls.views}
        text={String(article.views)}
      />
      <Icon Svg={EyeIcon} />
    </>
  );

  const date = (
    <Text
      className={cls.date}
      text={article.createdAt}
    />
  );

  const title = (
    <Text
      className={cls.title}
      title={article.title}
    />
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <div
        data-testid='ArticleListItem'
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar
              size={30}
              src={article.user.avatar}
            />
            <Text
              className={cls.username}
              text={article.user.username}
            />
            {date}
          </div>
          {title}
          {types}
          <AppImage
            fallback={
              <Skeleton
                width='100%'
                height={250}
              />
            }
            className={cls.img}
            src={article.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              className={cls.textBlock}
              block={textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.id)}
            >
              <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      data-testid='ArticleListItem'
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImage
            fallback={
              <Skeleton
                width={200}
                height={200}
              />
            }
            className={cls.img}
            src={article.img}
            alt={article.title}
          />
          {date}
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        {title}
      </Card>
    </AppLink>
  );
});
