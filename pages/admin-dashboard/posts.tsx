import React from 'react';
import PostListContainer from '../../components/posts/post-list-container';
import DashboardLayout from '../../layouts/DashboardLayout';

import css from './posts.module.scss';

function Posts() {
  return (
    <DashboardLayout>
      <div className={css.contentWrapper}>
          <PostListContainer />
      </div>
    </DashboardLayout>
  );
}

export default Posts;
