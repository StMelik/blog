import CopyIconDeprecated from '@/shared/assets/icons/copy-20-20.svg';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { memo, useCallback } from 'react';
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '../../deprecated/Button';
import { Icon } from '../Icon';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <pre className={classNames(cls.codeRedesigned, {}, [className])}>
          <Icon
            className={cls.copyBtn}
            onClick={handleCopy}
            Svg={CopyIcon}
            clickable
          />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(cls.code, {}, [className])}>
          <ButtonDeprecated
            className={cls.copyBtn}
            theme={ButtonTheme.CLEAR}
            onClick={handleCopy}
          >
            <CopyIconDeprecated className={cls.copyIcon} />
          </ButtonDeprecated>
          <code>{text}</code>
        </pre>
      }
    />
  );
});
