import React from 'react';
import { Tooltip } from '@material-ui/core';

import { useTheme } from '../../../hooks';

import Panel from '../../Panel';

import { useStyles } from '../../../styles/MaterialUI';
import { Container, WriteIcon, CameraIcon, VideoCameraIcon, DocumentIcon, ArticleIcon } from './styles';

const FeedShare: React.FC = () => {
  const { themeName } = useTheme();
  const classes = useStyles();
  return (
    <Panel>
      <Container>
        <Tooltip title="Write a new post" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <div className="write">
            <WriteIcon />
            <span>Start a post</span>
          </div>
        </Tooltip>
        <div className="attachment">
          <Tooltip title="Add a photo to the post" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
            <button type="button">
              <CameraIcon />
              Photo
            </button>
          </Tooltip>
          <Tooltip title="Add a video to the post" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
            <button type="button">
              <VideoCameraIcon />
              Video
            </button>
          </Tooltip>
          <Tooltip title="Add a file to the post" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
            <button type="button">
              <DocumentIcon />
              {themeName === 'old' ? 'Document' : 'Event'}
            </button>
          </Tooltip>
          <Tooltip title="Write an article" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
            <button type="button">
              <ArticleIcon />
              Write article
            </button>
          </Tooltip>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;
