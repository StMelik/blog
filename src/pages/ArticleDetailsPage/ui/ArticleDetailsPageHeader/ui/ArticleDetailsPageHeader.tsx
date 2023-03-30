import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../../model/selectors/article/article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { generatePath, useNavigate } from 'react-router';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const handleBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const handleEditArticle = useCallback(() => {
    navigate(generatePath(RoutePath.article_edit, {
      id: article?.id
    }));
  }, [article?.id, navigate]);

  return (
    <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToList}>
        {t('Назад к списку')}
      </Button>
      {canEdit && (
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={handleEditArticle}
        >
          {t('Редактировать')}
        </Button>
      )}
    </div>
  );
});
