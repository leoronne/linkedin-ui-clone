import React from 'react';

import Panel from '../../Panel';

import { Container, WriteIcon, CameraIcon, VideoCameraIcon, DocumentIcon, ArticleIcon } from './styles';

const FeedShare: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="write" data-tip="Write a new post">
          <WriteIcon />
          <span>Start a post</span>
        </div>
        <div className="attachment">
          <button type="button" data-tip="Add a photo to the post">
            <CameraIcon />
            Photo
          </button>
          <button type="button" data-tip="Add a video to the post">
            <VideoCameraIcon />
            Video
          </button>
          <button type="button" data-tip="Add a file to the post">
            <DocumentIcon />
            Document
          </button>
          <button type="button" data-tip="Write an article">
            <ArticleIcon />
            Write article
          </button>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;
