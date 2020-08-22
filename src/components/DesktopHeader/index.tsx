import React from 'react';

import { HomeButton, NetworkButton, JobsButton, MessagingButton, NotificationsButton, ProfileButton, WorkButton, PostJobButton, SearchButton } from '../HeaderButtons';

import { Container, Wrapper, LinkedInIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon onClick={() => window.location.reload()} data-tip="Go to homepage" />
          <SearchButton />
        </div>

        <div className="right">
          <nav>
            <HomeButton />
            <NetworkButton />
            <JobsButton />
            <MessagingButton />
            <NotificationsButton />
            <ProfileButton />
            <div className="line" />
            <WorkButton />
            <PostJobButton />
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
