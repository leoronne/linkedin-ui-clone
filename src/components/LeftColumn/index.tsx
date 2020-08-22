import React from 'react';
import ReactTooltip from 'react-tooltip';

import LoadingProfilePanel from '../Shimmer/LoadingProfilePanel';
import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';

const LeftColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
        <>
          <ProfilePanel />
          <HashtagPanel />
          <ReactTooltip place="bottom" type="dark" effect="solid" />
        </>
      )}
    </Container>
  );
};

export default LeftColumn;
