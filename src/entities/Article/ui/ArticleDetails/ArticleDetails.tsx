import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLouder,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import { ToggleFeature } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
  TextTheme
} from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/getArticleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { renderArticleBlock } from './renderBlock';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <HStack
        justify='center'
        max
      >
        <AvatarDeprecated
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
        <TextDeprecated
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />

        <HStack gap='8'>
          <IconDeprecated Svg={EyeIcon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>

        <HStack gap='8'>
          <IconDeprecated Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>

      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <Text
        title={article?.title}
        size='l'
        bold
      />
      <Text
        text={article?.subtitle}
        size='l'
      />
      <AppImage
        className={cls.img}
        src={article?.img}
        fallback={
          <Skeleton
            width='100%'
            height={420}
            borderRadius='16px'
          />
        }
      />

      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

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

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  let content;

  if (isLoading) {
    content = (
      <>
        <SkeletonDeprecated
          className={cls.avatar}
          width={200}
          height={200}
          borderRadius='50%'
        />
        <SkeletonDeprecated
          width={300}
          height={32}
        />
        <SkeletonDeprecated
          width={600}
          height={24}
        />
        <SkeletonDeprecated
          width='100%'
          height={200}
        />
        <SkeletonDeprecated
          width='100%'
          height={200}
        />
      </>
    );
  } else if (error) {
    content = (
      <TextDeprecated
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузке страницы')}
      />
    );
  } else {
    content = (
      <ToggleFeature
        feature='isAppRedesigned'
        on={<Redesigned />}
        off={<Deprecated />}
      />
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
