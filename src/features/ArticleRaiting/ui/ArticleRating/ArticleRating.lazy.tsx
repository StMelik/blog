import { Skeleton } from '@/shared/ui/Skeleton';
import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingAsync = lazy(() => import('./ArticleRating'));

export const ArticleRatingLazy = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={140} />}>
    <ArticleRatingAsync {...props} />
  </Suspense>
);
