import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRaiting';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { StickyComponentLayout } from '@/shared/layouts/StickyComponentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLouder,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import { ToggleFeature } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { AdditionalInfoContainer } from '../../AdditionalInfoContainer/AdditionalInfoContainer';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLouder
      reducers={reducers}
      removeAfterUnmount
    >
      <ToggleFeature
        feature='isAppRedesigned'
        on={
          <StickyComponentLayout
            content={
              <Page
                className={classNames(cls.articleDetailsPage, {}, [className])}
              >
                <VStack
                  gap='16'
                  max
                >
                  <DetailsContainer />
                  <ArticleRating articleId={id} />
                  <ArticleRecommendationsList />
                  <ArticleDetailsComments id={id} />
                </VStack>
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
        off={
          <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
            <VStack
              gap='16'
              max
            >
              <ArticleDetailsPageHeader />
              <ArticleDetails id={id} />
              <ToggleFeature
                feature='isArticleRatingEnabled'
                on={<ArticleRating articleId={id} />}
                off={<Card>{t('Оценка статей скоро появится')}</Card>}
              />
              <ToggleFeature
                feature='isArticleRecommendationsEnabled'
                on={<ArticleRecommendationsList />}
                off={<Card>{t('Рекомендации скоро появятся')}</Card>}
              />
              <ArticleDetailsComments id={id} />
            </VStack>
          </Page>
        }
      />
    </DynamicModuleLouder>
  );
};

export default ArticleDetailsPage;
