import { Story } from '@storybook/react/types-6-0';
import { Suspense } from 'react';
import { Loader } from '@/shared/ui/deprecated/Loader';

export const SuspenseDecorator = (StoryComponent: Story) => (
  <Suspense fallback={<Loader />}>
    <StoryComponent />
  </Suspense>
);
