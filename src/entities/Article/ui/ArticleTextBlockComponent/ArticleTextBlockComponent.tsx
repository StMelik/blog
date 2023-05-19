import { ArticleTextBlock } from '../../model/types/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeature } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleTextBlockComponent, {}, [className])}
      >
        {block.title && (
          <ToggleFeature
            feature='isAppRedesigned'
            on={
              <Text
                className={cls.title}
                title={block.title}
              />
            }
            off={
              <TextDeprecated
                className={cls.title}
                title={block.title}
              />
            }
          />
        )}
        {block.paragraphs.map((paragraph) => (
          <ToggleFeature
            feature='isAppRedesigned'
            on={
              <Text
                className={cls.paragraph}
                key={paragraph}
                text={paragraph}
              />
            }
            off={
              <TextDeprecated
                className={cls.paragraph}
                key={paragraph}
                text={paragraph}
              />
            }
          />
        ))}
      </div>
    );
  }
);
