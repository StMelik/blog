import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
      data: articles,
      isLoading,
      error
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <VStack
        data-testid='ArticleRecommendationsList'
        gap='16'
        className={classNames('', {}, [className])}
      >
        <ToggleFeature
          feature='isAppRedesigned'
          on={
            <Text
              size='l'
              title={t('Рекомендуем')}
            />
          }
          off={
            <TextDeprecated
              size={TextSize.L}
              title={t('Рекомендуем')}
            />
          }
        />
        <ArticleList
          target='_blank'
          articles={articles}
        />
      </VStack>
    );
  }
);
