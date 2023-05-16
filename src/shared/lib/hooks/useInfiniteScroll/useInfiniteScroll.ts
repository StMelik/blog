import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef?: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (params: UseInfiniteScrollProps) => {
  const { callback, triggerRef, wrapperRef } = params;

  useEffect(() => {
    if (!callback) {
      return;
    }

    const wrapperElement = wrapperRef?.current || null;
    const triggerElement = triggerRef.current;

    const options = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerElement);

    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
