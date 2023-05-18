import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { getVStack, HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArticleBlockType,
  ArticleView
} from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/Article';
import { ArticleListItemProps } from '../ArticleListItem';
import cls from './ArticleListItemRedesigned.module.scss';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;

  const { t } = useTranslation();

  const views = (
    <HStack gap='8'>
      <Icon Svg={EyeIcon} />
      <Text
        className={cls.views}
        text={String(article.views)}
      />
    </HStack>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <Card
        padding='24'
        max
        data-testid='ArticleListItem'
        className={classNames(cls.articleListItem, {}, [
          className,
          cls[view],
          getVStack({ gap: '16' })
        ])}
      >
        <HStack gap='8'>
          <Avatar
            size={32}
            src={article.user.avatar}
            username={article.user.username}
          />
          <Text text={article.createdAt} />
        </HStack>

        <Text
          title={article.title}
          bold
        />

        <Text
          title={article.subtitle}
          size='s'
        />

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

        {textBlock.paragraphs && (
          <Text
            className={cls.textBlock}
            text={textBlock.paragraphs.slice(0, 2).join(' ')}
          />
        )}

        <HStack
          max
          justify='between'
        >
          <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
          >
            <Button variant='outline'>{t('Читать далее')}</Button>
          </AppLink>
          {views}
        </HStack>
      </Card>
    );
  }

  return (
    <AppLink
      data-testid='ArticleListItem'
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card
        className={cls.card}
        border='round'
      >
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
        <VStack
          className={cls.info}
          gap='4'
        >
          <Text
            title={article.title}
            className={cls.title}
          />
          <VStack
            gap='4'
            className={cls.footer}
          >
            <HStack
              justify='between'
              max
            >
              <Text
                text={article.createdAt}
                className={cls.date}
              />
              {views}
            </HStack>
            <Avatar
              size={32}
              src={article.user.avatar}
              username={article.user.username}
            />
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  );
});
