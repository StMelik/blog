import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../../model/selectors/article/article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';

import { HStack } from '@/shared/ui/deprecated/Stack';
import {
  getRouteArticleEdit,
  getRouteArticles
} from '@/shared/constants/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const handleBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const handleEditArticle = useCallback(() => {
      navigate(getRouteArticleEdit(article?.id!));
    }, [article?.id, navigate]);

    return (
      <HStack
        max
        justify='between'
        className={classNames('', {}, [className])}
      >
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={handleBackToList}
        >
          {t('Назад к списку')}
        </Button>
        {canEdit && (
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={handleEditArticle}
          >
            {t('Редактировать')}
          </Button>
        )}
      </HStack>
    );
  }
);
