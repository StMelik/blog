import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './AddCommentForm.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { DynamicModuleLouder, ReducersList } from 'shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const redusers: ReducersList = {
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

  const handleSendComment = useCallback(
    () => {
      onSendComment(text || '');
      changeCommentText('');
    },
    [onSendComment, text, changeCommentText]
  );

  return (
    <DynamicModuleLouder reducers={redusers} removeAfterUnmount>
      <div className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={changeCommentText}
          className={cls.input}
        />
        <Button theme={ButtonTheme.OUTLINE} onClick={handleSendComment}>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLouder>
  );
});

export default AddCommentForm;