import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const { id } = useParams<string>();
  const isEdit = Boolean(id);

  // Реализовать страницу после прохождения курса

  return (
    <Page className={classNames(cls.articleEditPage, {}, [className])}>
      {isEdit
        ? t('Редактировать статьи с ID = ') + id
        : t('Создание новой статьи')}
    </Page>
  );
});

export default ArticleEditPage;
