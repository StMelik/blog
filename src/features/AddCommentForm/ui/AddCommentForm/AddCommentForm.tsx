import {
  getAddCommentFormError,
  getAddCommentFormText
} from '../../model/selectors/addCommentFormSelectors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button';

import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import cls from './AddCommentForm.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  addCommentFormActions,
  addCommentFormReducer
} from '../../model/slice/addCommentFormSlice';
import {
  DynamicModuleLouder,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeature } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const changeCommentText = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const handleSendComment = useCallback(() => {
    onSendComment(text || '');
    changeCommentText('');
  }, [onSendComment, text, changeCommentText]);

  return (
    <DynamicModuleLouder
      reducers={reducers}
      removeAfterUnmount
    >
      <ToggleFeature
        feature='isAppRedesigned'
        on={
          <Card
            padding='24'
            border='round'
            max
          >
            <HStack
              data-testid='AddCommentForm'
              justify='between'
              max
              gap='16'
              className={classNames(cls.addCommentFormRedesigned, {}, [
                className
              ])}
            >
              <Input
                data-testid='AddCommentForm.Input'
                placeholder={t('Введите текст комментария')}
                value={text}
                onChange={changeCommentText}
                className={cls.input}
              />
              <Button
                data-testid='AddCommentForm.Button'
                variant='outline'
                onClick={handleSendComment}
              >
                {t('Отправить')}
              </Button>
            </HStack>
          </Card>
        }
        off={
          <HStack
            data-testid='AddCommentForm'
            justify='between'
            max
            className={classNames(cls.addCommentForm, {}, [className])}
          >
            <InputDeprecated
              data-testid='AddCommentForm.Input'
              placeholder={t('Введите текст комментария')}
              value={text}
              onChange={changeCommentText}
              className={cls.input}
            />
            <ButtonDeprecated
              data-testid='AddCommentForm.Button'
              theme={ButtonTheme.OUTLINE}
              onClick={handleSendComment}
            >
              {t('Отправить')}
            </ButtonDeprecated>
          </HStack>
        }
      />
    </DynamicModuleLouder>
  );
});

export default AddCommentForm;
