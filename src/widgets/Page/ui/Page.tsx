import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollSaveByPath, scrollSaveActions } from '@/features/ScrollSave';
import {
  memo, MutableRefObject, ReactNode, UIEvent, useRef
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
  isSaveScroll?: boolean;
}

export const Page = memo((props: PageProps) => {
  const {
    className, children, onScrollEnd, isSaveScroll
  } = props;

  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const scrollPosition = useSelector((state: StateSchema) => getScrollSaveByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  useInitialEffect(() => {
    if (!isSaveScroll) return;

    wrapperRef.current.scrollTop = scrollPosition;
  });

  const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    if (!isSaveScroll) return;

    dispatch(scrollSaveActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname
    }));
  }, 1000);

  return (
    <main
      className={classNames(cls.page, {}, [className])}
      ref={wrapperRef}
      onScroll={handleScroll}
    >
      {children}
      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
    </main>
  );
});
