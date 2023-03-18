import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button';
import cls from './Code.module.scss';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { ButtonTheme } from '../Button/ui/Button';

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
    <pre className={classNames(cls.code, {}, [className])}>
      <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={handleCopy}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
