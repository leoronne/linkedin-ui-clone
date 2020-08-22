/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import kFormatter from '../../../utils/kFormatter';
import openPage from '../../../utils/openPage';

import Panel from '../../Panel';

import { Container, SaveIcon } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="premium-border" />
        <div className="profile-cover" />
        <img src="https://github.com/leoronne.png" alt="Avatar" className="profile-picture" data-tip="Go to Leonardo Ronne profile" onClick={() => openPage('in/leoronne')} />
        <h1>Leonardo Ronne</h1>
        <h2>Product Manager & Frontend Developer at Visor Brasil</h2>

        <div className="separator" />

        <div className="key-value">
          <span className="key">Who viewed your profile</span>
          <span className="value">{kFormatter(Math.floor(Math.random() * (10000 - 1)) + 1)}</span>
        </div>
        <div className="key-value">
          <span className="key">Views of your post</span>
          <span className="value">{kFormatter(Math.floor(Math.random() * (10000 - 1)) + 1)}</span>
        </div>
        <div className="separator" />
        <div className="saved-items" onClick={() => openPage('feed/saved')} data-tip="Go to saved items">
          <SaveIcon />
          <span>Saved Items</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
