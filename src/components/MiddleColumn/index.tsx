import React from 'react';

import twitter from '~/assets/img/twitter.png';
import facebook from '~/assets/img/facebook.png';
import rocketseat from '~/assets/img/rocketseat.png';

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
          <FeedPost avatar="https://github.com/leoronne.png" user="Leonardo Ronne" title="Product Manager & Frontend Developer at Visor Brasil" />
          <FeedPost avatar={rocketseat} user="Rocketseat" title="Educational institution" />
          <FeedPost avatar={facebook} user="Facebook" title="Company" />
          <FeedPost avatar={twitter} user="Twitter" title="Company" />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
