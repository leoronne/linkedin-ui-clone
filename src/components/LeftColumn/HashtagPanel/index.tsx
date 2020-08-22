/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import Panel from '../../Panel';

import openPage from '../../../utils/openPage';

import { Container, HashtagIcon, UpIcon, DownIcon, GroupsIcon } from './styles';

const tags = ['devops', 'productmanagement', 'react', 'frontend', 'typescript', 'ui-clone', 'rocketseat'];
const groups = ['ReactJS', 'Visor', 'Visor Brasil', 'Product School'];

const HashtagPanel: React.FC = () => {
  const [showTags, setShowTags] = useState(true);
  const [showGroups, setShowGroups] = useState(true);
  return (
    <Container>
      <Panel>
        <div className="title">
          <span onClick={() => openPage('/groups/')} data-tip="Search groups">
            Groups
          </span>
          <div className="hide-button" onClick={() => setShowGroups(!showGroups)} data-tip={`${showGroups ? 'Hide' : 'Show'} groups`}>
            {showGroups ? <DownIcon /> : <UpIcon />}
          </div>
        </div>

        <div className={`tags-list${showGroups ? '' : ' hidden'}`}>
          {groups.map(item => (
            <span className="tag">
              <GroupsIcon />
              {item}
            </span>
          ))}
        </div>

        <div className="title">
          <span onClick={() => openPage('/feed/following/?filterType=channel&focused=true')} data-tip="Search followed hashtags">
            Followed Hashtags
          </span>
          <div className="hide-button" onClick={() => setShowTags(!showTags)} data-tip={`${showTags ? 'Hide' : 'Show'} followed hashtags`}>
            {showTags ? <DownIcon /> : <UpIcon />}
          </div>
        </div>

        <div className={`tags-list${showTags ? '' : ' hidden'}`}>
          {tags.map(item => (
            <span className="tag" onClick={() => openPage(`feed/hashtag/${item}/`)} data-tip={`Search #${item} hashtag`}>
              <HashtagIcon />
              {item}
            </span>
          ))}
        </div>

        <div className="discover">
          <span onClick={() => openPage('mynetwork/discover-hub/')} data-tip="Manage your network">
            Discover More
          </span>
        </div>
      </Panel>
    </Container>
  );
};

export default HashtagPanel;
