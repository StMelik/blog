import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import cls from './LoaderPage.module.scss';

interface LoaderPageProps {
  className?: string;
}

export const LoaderPage: FC<LoaderPageProps> = ({ className }) => (
  <div className={classNames(cls.loaderPage, {}, [className])}>
    <Loader />
  </div>
);
