import React, { useMemo, useState } from 'react';

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
      <button type="button" className="active" onClick={() => window.location.reload()}>
        <HomeIcon />
        <div className="notification-badge no-count">
          <div className="no-count-circle" />
        </div>
        <span>Home</span>
      </button>
    </Container>
  );
};

export const NetworkButton: React.FC = () => {
  return (
    <Container id="network-button">
      <button type="button" onClick={() => openPage('mynetwork')}>
        <NetWorkIcon />
        <span>My Network</span>
      </button>
    </Container>
  );
};

export const JobsButton: React.FC = () => {
  return (
    <Container id="jobs-button">
      <button type="button" onClick={() => openPage('jobs')}>
        <JobsIcon />
        <span>Jobs</span>
      </button>
    </Container>
  );
};

export const MessagingButton: React.FC = () => {
  const notifications = useMemo(() => Math.floor(Math.random() * (100 - 1)) + 1, []);
  return (
    <Container id="messages-button">
      <button type="button" onClick={() => openPage('messaging')}>
        <MessagesIcon />
        <div className="notification-badge">
          <p>{notifications}</p>
        </div>
        <span>Messaging</span>
      </button>
    </Container>
  );
};

export const NotificationsButton: React.FC = () => {
  const notifications = useMemo(() => Math.floor(Math.random() * (100 - 1)) + 1, []);
  return (
    <Container id="notifications-button">
      <button type="button" onClick={() => openPage('notifications')}>
        <NotificationsIcon />
        <div className="notification-badge">
          <p>{notifications}</p>
        </div>
        <span>Notifications</span>
      </button>
    </Container>
  );
};

export const ProfileButton: React.FC = () => {
  return (
    <Container>
      <button type="button" onClick={() => openPage('in/')}>
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
      <button type="button" onClick={() => openPage('profinder')}>
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
      <button type="button" onClick={() => openPage('talent/post-a-job')}>
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
      <SearchIcon
        onClick={() => {
          if (search) openPage(`search/results/all/?keywords=${encodeURI(search)}`);
        }}
      />
      <SearchInput placeholder="Search" onChange={e => setSearch(e.target.value.trim())} />
    </SearchForm>
  );
};
