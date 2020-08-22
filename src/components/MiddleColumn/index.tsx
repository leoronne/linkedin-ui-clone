import React from 'react';

import LoadingFeedShare from '../Shimmer/LoadingFeedShare';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';
import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import { Container, DownIcon } from './styles';

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare />
          <div className="seprator">
            <div className="line" />
            <span data-tip="Sort posts">
              Sort by:<strong> Top</strong>
            </span>
            <DownIcon />
          </div>
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
