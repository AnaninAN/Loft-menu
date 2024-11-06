/* eslint-disable indent */
import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/model/slices/loginSlice';
import { profileReducer } from '@/features/EditableProfileCard/model/slices/profileSlice';
import { addCommentReducer } from '@/entities/Comment/model/slices/addCommentSlice';
import { articleDetailsReducer } from '@/entities/Article/model/slices/articleDetailsSlice';
import { articlesReducer } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import { pageReducer } from '@/widgets/Page';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  page: pageReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addCommentForm: addCommentReducer,
  articles: articlesReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
