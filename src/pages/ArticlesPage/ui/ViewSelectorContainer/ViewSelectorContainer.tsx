import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { memo } from 'react';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo(
  (props: ViewSelectorContainerProps) => {
    const { className } = props;

    const { view, handleChangeView } = useArticleFilters();

    return (
      <ArticleViewSelector
        className={className}
        view={view}
        onViewClick={handleChangeView}
      />
    );
  }
);
