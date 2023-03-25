import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView
} from '../../model/types/Article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view
  } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

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
            <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
              {t('Читать далее')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
      <Card onClick={onOpenArticle} className={cls.card}>
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
    </div>
  );
});