/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Tooltip } from '@material-ui/core';

import Panel from '../../Panel';

import openPage from '../../../utils/openPage';

import { useStyles } from '../../../styles/MaterialUI';
import { Container, HashtagIcon, UpIcon, DownIcon, GroupsIcon } from './styles';

const tags = ['devops', 'productmanagement', 'react', 'frontend', 'typescript', 'ui-clone', 'rocketseat'];
const groups = ['ReactJS', 'Memed', 'Visor Brasil', 'Product School', 'Rocketseat'];

const HashtagPanel: React.FC = () => {
  const classes = useStyles();

  const [showTags, setShowTags] = useState(true);
  const [showGroups, setShowGroups] = useState(true);
  return (
    <Container>
      <Panel>
        <div className="title">
          <Tooltip title="Search groups" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
            <span onClick={() => openPage('/groups/')}>Groups</span>
          </Tooltip>
          <Tooltip title={`${showGroups ? 'Hide' : 'Show'} groups`} placement="right" arrow classes={{ tooltip: classes.tooltip }}>
            <div className="hide-button" onClick={() => setShowGroups(!showGroups)}>
              {showGroups ? <DownIcon /> : <UpIcon />}
            </div>
          </Tooltip>
        </div>

        <div className={`tags-list${showGroups ? '' : ' hidden'}`}>
          {groups.map((item, index) => (
            <span className="tag" key={`${item}-${index}`}>
              <GroupsIcon />
              {item}
            </span>
          ))}
        </div>

        <div className="title">
          <Tooltip title="Search followed hashtags" placement="right" arrow classes={{ tooltip: classes.tooltip }}>
            <span onClick={() => openPage('/feed/following/?filterType=channel&focused=true')}>Followed Hashtags</span>
          </Tooltip>
          <Tooltip title={`${showTags ? 'Hide' : 'Show'} followed hashtags`} placement="right" arrow classes={{ tooltip: classes.tooltip }}>
            <div className="hide-button" onClick={() => setShowTags(!showTags)}>
              {showTags ? <DownIcon /> : <UpIcon />}
            </div>
          </Tooltip>
        </div>

        <div className={`tags-list${showTags ? '' : ' hidden'}`}>
          {tags.map((item, index) => (
            <Tooltip title={`Search #${item} hashtag`} placement="right" arrow classes={{ tooltip: classes.tooltip }} key={`${item}-${index}`}>
              <span className="tag" onClick={() => openPage(`feed/hashtag/${item}/`)}>
                <HashtagIcon />
                {item}
              </span>
            </Tooltip>
          ))}
        </div>

        <div className="discover">
          <Tooltip title="Manage your network" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
            <span onClick={() => openPage('mynetwork/discover-hub/')}>Discover More</span>
          </Tooltip>
        </div>
      </Panel>
    </Container>
  );
};

export default HashtagPanel;
