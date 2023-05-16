import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { memo } from 'react';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
  const { className } = props;

  const {
    order,
    sort,
    search,
    type,
    handleChangeSort,
    handleChangeOrder,
    handleChangeSearch,
    handleChangeType
  } = useArticleFilters();

  return (
    <ArticlesFilters
      className={className}
      onChangeOrder={handleChangeOrder}
      onChangeSearch={handleChangeSearch}
      onChangeSort={handleChangeSort}
      onTabClick={handleChangeType}
      order={order}
      search={search}
      sort={sort}
      type={type}
    />
  );
});
