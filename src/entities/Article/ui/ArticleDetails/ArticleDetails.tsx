import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLouder,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import cls from './ArticleDetails.module.scss';
import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/getArticleDetails';
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { ArticleBlock } from '../../model/types/Article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleBlockType } from '../../model/consts/articleConsts';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
  };

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
      default:
        return null;
    }
  }, []);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          borderRadius='50%'
        />
        <Skeleton
          width={300}
          height={32}
        />
        <Skeleton
          width={600}
          height={24}
        />
        <Skeleton
          width='100%'
          height={200}
        />
        <Skeleton
          width='100%'
          height={200}
        />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузке страницы')}
      />
    );
  } else {
    content = (
      <>
        <HStack
          justify='center'
          max
        >
          <Avatar
            className={cls.avatar}
            size={200}
            src={article?.img}
          />
        </HStack>
        <VStack
          data-testid='ArticleDetails.Info'
          gap='4'
          max
        >
          <Text
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />

          <HStack gap='8'>
            <Icon Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </HStack>

          <HStack gap='8'>
            <Icon Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>

        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLouder
      reducers={reducers}
      removeAfterUnmount
    >
      <VStack
        gap='16'
        className={classNames(cls.articleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLouder>
  );
});
