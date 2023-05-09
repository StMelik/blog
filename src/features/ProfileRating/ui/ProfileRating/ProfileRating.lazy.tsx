import { Skeleton } from '@/shared/ui/Skeleton';
import { lazy, Suspense } from 'react';
import { ProfileRatingProps } from './ProfileRating';

const ProfileRatingAsync = lazy(() => import('./ProfileRating'));

export const ProfileRatingLazy = (props: ProfileRatingProps) => (
  <Suspense
    fallback={
      <Skeleton
        width='100%'
        height={140}
      />
    }
  >
    <ProfileRatingAsync {...props} />
  </Suspense>
);
