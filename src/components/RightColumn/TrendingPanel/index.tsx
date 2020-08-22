import React from 'react';

import kFormatter from '../../../utils/kFormatter';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  const trending = ['Rocketseat', 'GoStack', 'DC FanDome', 'UI Clone', 'COVID'];
  const recommended = ['Product Management', 'React', 'TypeScript', 'Frontend'];
  return (
    <>
      <Container>
        <Panel>
          <span className="title">Trending topics</span>

          <ul>
            {trending.map(topic => (
              <li key={topic}>
                <span className="bullet" />
                <span className="news">
                  <span className="head">{topic}</span>
                  <span className="subtext">{`${Math.floor(Math.random() * (7 - 1)) + 1}d ago • ${kFormatter(Math.floor(Math.random() * (10000 - 1)) + 1)} readers`}</span>
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </Container>
      <Container>
        <Panel>
          <span className="title">Recommended topics</span>

          <ul>
            {recommended.map(topic => (
              <li key={topic}>
                <span className="bullet" />
                <span className="news">
                  <span className="head">{topic}</span>
                  <span className="subtext">{`${Math.floor(Math.random() * (7 - 1)) + 1}d ago • ${kFormatter(Math.floor(Math.random() * (10000 - 1)) + 1)} readers`}</span>
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </Container>
    </>
  );
};

export default TrendingPanel;
