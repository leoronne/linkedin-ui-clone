import React from 'react';

import { HomeButton, NetworkButton, JobsButton, MessagingButton, NotificationsButton, ProfileButton, WorkButton, PostJobButton, SearchButton } from '../HeaderButtons';

import { Container, Wrapper, LinkedInIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon onClick={() => window.open('https://github.com/leoronne/linkedin-ui-clone', 'blank')} data-tip="Go to the GitHub repository" />
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
