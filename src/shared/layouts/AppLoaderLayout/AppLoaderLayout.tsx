import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { memo } from 'react';
import { MainLayout } from '../MainLayout';
import cls from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = memo(() => {
  const header = (
    <HStack className={cls.header}>
      <Skeleton
        width={40}
        height={40}
        borderRadius='50%'
      />
    </HStack>
  );

  const content = (
    <VStack
      gap='16'
      style={{ height: '100%' }}
    >
      <Skeleton
        width='70%'
        height={32}
        borderRadius='16px'
      />
      <Skeleton
        width='40%'
        height={20}
        borderRadius='16px'
      />
      <Skeleton
        width='50%'
        height={20}
        borderRadius='16px'
      />
      <Skeleton
        width='30%'
        height={32}
        borderRadius='16px'
      />
      <Skeleton
        width='80%'
        height='40%'
        borderRadius='16px'
      />
      <Skeleton
        width='80%'
        height='40%'
        borderRadius='16px'
      />
    </VStack>
  );

  const sidebar = (
    <Skeleton
      width={220}
      height='100%'
      borderRadius='32px'
    />
  );

  return (
    <MainLayout
      header={header}
      content={content}
      sidebar={sidebar}
    />
  );
});
