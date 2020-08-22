import React, { useState } from 'react';

import openPage from '../../utils/openPage';

import {
  Container,
  HomeIcon,
  NetWorkIcon,
  WorkIcon,
  CaretDownIcon,
  JobsIcon,
  MessagesIcon,
  NotificationsIcon,
  PostJobIcon,
  ProfileCircle,
  SearchForm,
  SearchIcon,
  SearchInput,
} from './styles';

export const HomeButton: React.FC = () => {
  return (
    <Container id="home-button">
      <button type="button" className="active" onClick={() => openPage('feed')} data-tip="Go to the feed">
        <HomeIcon />
        <span>Home</span>
      </button>
    </Container>
  );
};

export const NetworkButton: React.FC = () => {
  return (
    <Container id="network-button">
      <button type="button" onClick={() => openPage('mynetwork')} data-tip="Go to your network">
        <NetWorkIcon />
        <span>My Network</span>
      </button>
    </Container>
  );
};

export const JobsButton: React.FC = () => {
  return (
    <Container id="jobs-button">
      <button type="button" onClick={() => openPage('jobs')} data-tip="Search open jobs">
        <JobsIcon />
        <span>Jobs</span>
      </button>
    </Container>
  );
};

export const MessagingButton: React.FC = () => {
  return (
    <Container id="messages-button">
      <button type="button" onClick={() => openPage('messaging')} data-tip="Go to your messages">
        <MessagesIcon />
        <span>Messaging</span>
      </button>
    </Container>
  );
};

export const NotificationsButton: React.FC = () => {
  return (
    <Container id="notifications-button">
      <button type="button" onClick={() => openPage('notifications')} data-tip="Go to your notifications">
        <NotificationsIcon />
        <span>Notifications</span>
      </button>
    </Container>
  );
};

export const ProfileButton: React.FC = () => {
  return (
    <Container>
      <button type="button" onClick={() => openPage('in/')} data-tip="Go to your profile">
        <ProfileCircle src="https://github.com/leoronne.png" />
        <span>
          Me
          <CaretDownIcon />
        </span>
      </button>
    </Container>
  );
};

export const WorkButton: React.FC = () => {
  return (
    <Container id="work-button">
      <button type="button" onClick={() => openPage('profinder')} data-tip="Search more LinkedIn features">
        <WorkIcon />
        <span>
          Work
          <CaretDownIcon />
        </span>
      </button>
    </Container>
  );
};

export const PostJobButton: React.FC = () => {
  return (
    <Container id="postjob-button">
      <button type="button" onClick={() => openPage('talent/post-a-job')} data-tip="Post a job on LinkedIn">
        <PostJobIcon />
        <span>Post a job</span>
      </button>
    </Container>
  );
};

export const SearchButton: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <SearchForm
      onSubmit={e => {
        e.preventDefault();
        if (search) openPage(`search/results/all/?keywords=${encodeURI(search)}`);
      }}
    >
      <SearchInput placeholder="Search" onChange={e => setSearch(e.target.value.trim())} data-tip="Search something on LinkedIn" />
      <SearchIcon
        data-tip={`Search ${search} on LinkedIn`}
        onClick={() => {
          if (search) openPage(`search/results/all/?keywords=${encodeURI(search)}`);
        }}
      />
    </SearchForm>
  );
};
