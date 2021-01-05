import React, { useMemo } from 'react';
import { Tooltip } from '@material-ui/core';

import kFormatter from '../../../utils/kFormatter';

import Panel from '../../Panel';

import { useStyles } from '../../../styles/MaterialUI';
import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  const classes = useStyles();

  const trending = ['Rocketseat', 'GoStack', 'DC FanDome', 'UI Clone', 'Do While'];
  const recommended = ['Product Management', 'React', 'TypeScript', 'Frontend', 'Next.js'];

  return (
    <>
      <Container>
        <Panel>
          <span className="title">Trending topics</span>

          <ul>
            {trending.map(topic => {
              const readers = useMemo(() => kFormatter(Math.floor(Math.random() * (10000 - 1)) + 1), []);
              const day = useMemo(() => Math.floor(Math.random() * (7 - 1)) + 1, []);
              return (
                <li key={topic}>
                  <span className="bullet" />
                  <span className="news">
                    <Tooltip title={`${readers} users engaged with this topic`} placement="left" arrow classes={{ tooltip: classes.tooltip }}>
                      <span className="head">{topic}</span>
                    </Tooltip>
                    <span className="subtext">{`${day}d ago • ${readers} readers`}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </Panel>
      </Container>
      <Container>
        <Panel>
          <span className="title">Recommended topics</span>

          <ul>
            {recommended.map(topic => {
              const readers = useMemo(() => kFormatter(Math.floor(Math.random() * (10000 - 1)) + 1), []);
              const day = useMemo(() => Math.floor(Math.random() * (7 - 1)) + 1, []);
              return (
                <li key={topic}>
                  <span className="bullet" />
                  <span className="news">
                    <Tooltip title={`${readers} users engaged with this topic`} placement="left" arrow classes={{ tooltip: classes.tooltip }}>
                      <span className="head">{topic}</span>
                    </Tooltip>
                    <span className="subtext">{`${day}d ago • ${readers} readers`}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </Panel>
      </Container>
    </>
  );
};

export default TrendingPanel;
