import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import {
  Article, ArticleTextBlock
} from '../../model/types/Article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import { getRouteArticleDetails } from '@/shared/constants/router';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view,
    target
  } = props;

  const { t } = useTranslation();

  const types = <Text className={cls.types} text={article.type.join(', ')} />;

  const views = (
    <>
      <Text className={cls.views} text={String(article.views)} />
      <Icon Svg={EyeIcon} />
    </>
  );

  const image = (
    <img
      className={cls.img}
      src={article.img}
      alt={article.title}
    />
  );

  const date = <Text className={cls.date} text={article.createdAt} />;

  const title = <Text className={cls.title} title={article.title} />;

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text className={cls.username} text={article.user.username} />
            {date}
          </div>
          {title}
          {types}
          {image}
          {textBlock && <ArticleTextBlockComponent className={cls.textBlock} block={textBlock} />}
          <div className={cls.footer}>
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
              <Button theme={ButtonTheme.OUTLINE}>
                {t('Читать далее')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          {image}
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
