import { memo, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyComponentLayout.module.scss';

interface StickyComponentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyComponentLayout = memo(
  (props: StickyComponentLayoutProps) => {
    const { className, left, content, right } = props;

    const { t } = useTranslation();

    return (
      <div className={classNames(cls.stickyComponentLayout, {}, [className])}>
        {left && <div className={cls.left}>{left}</div>}
        <div className={cls.content}>{content}</div>
        {right && <div className={cls.right}>{right}</div>}
      </div>
    );
  }
);
