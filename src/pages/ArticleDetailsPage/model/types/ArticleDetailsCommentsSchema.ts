import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Coment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
