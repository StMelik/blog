import { ArticleImageBlock } from '../../model/types/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { ToggleFeature } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleImageBlockComponent, {}, [className])}
      >
        <img
          className={cls.img}
          src={block.src}
          alt={block.title}
        />
        {block.title && (
          <ToggleFeature
            feature='isAppRedesigned'
            on={
              <Text
                text={block.title}
                align={TextAlign.CENTER}
              />
            }
            off={
              <TextDeprecated
                text={block.title}
                align={TextAlign.CENTER}
              />
            }
          />
        )}
      </div>
    );
  }
);
