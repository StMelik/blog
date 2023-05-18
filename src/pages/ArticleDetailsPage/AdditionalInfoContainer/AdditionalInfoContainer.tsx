import { useGetArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ArticleAdditionalInfo } from '../ArticleAdditionalInfo/ArticleAdditionalInfo';
import cls from './AdditionalInfoContainer.module.scss';

interface AdditionalInfoContainerProps {
  className?: string;
}

export const AdditionalInfoContainer = memo(
  (props: AdditionalInfoContainerProps) => {
    const { className } = props;

    const navigate = useNavigate();

    const article = useGetArticleDetailsData();

    const handleEditArticle = useCallback(() => {
      navigate(getRouteArticleEdit(article?.id!));
    }, [article?.id, navigate]);

    if (!article) {
      return null;
    }

    return (
      <Card
        className={classNames(cls.card, {}, [className])}
        padding='24'
        border='round'
      >
        <ArticleAdditionalInfo
          createAt={article.createdAt}
          author={article.user}
          views={article.views}
          onEdit={handleEditArticle}
        />
      </Card>
    );
  }
);
