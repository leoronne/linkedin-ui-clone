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
          <FeedPost avatar="https://github.com/leoronne.png" user="Leonardo Ronne" title="Product Manager & Frontend Developer at Visor Brasil" />
          <FeedPost avatar="https://i.imgur.com/81RtXfT.jpg" user="Rocketseat" title="Educational institution" />
          <FeedPost
            avatar="https://scontent.frao1-2.fna.fbcdn.net/v/t1.0-9/101454731_166370844924516_5729355608289705984_n.png?_nc_cat=1&_nc_sid=09cbfe&_nc_eui2=AeELfVt9B7baBjDpkTf2QMIqYC89AZzaMd1gLz0BnNox3c-N14W7LwSs5DpWKG9pzRkNucUTARBRWbYPPlN9eJRK&_nc_ohc=ircPaoZWfN8AX-DFqa6&_nc_oc=AQnIOUI8H_dbLtKCm-1ACQQCw_uU5GdOU_UysmoDvfQ7qFmDWaEanxhKyOQjgtCcAoA&_nc_ht=scontent.frao1-2.fna&oh=f728ac00ae21ce64ec458839b50108a7&oe=5F668EA5"
            user="Facebook"
            title="Company"
          />
          <FeedPost
            avatar="https://media-exp1.licdn.com/dms/image/C560BAQGQ8NKflp4d1Q/company-logo_200_200/0?e=1606348800&v=beta&t=-cxsckBl3208PZx4cYU9CmuhbWTYVHy3jNmuzfIaYAQ"
            user="Twitter"
            title="Company"
          />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
