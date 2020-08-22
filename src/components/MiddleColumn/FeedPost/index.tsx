import React from 'react';

import kFormatter from '../../../utils/kFormatter';

import Panel from '../../Panel';

import { Container, Row, PostImage, Separator, Avatar, Column, LikeIcon, CommentIcon, ShareIcon, SendIcon } from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://i.imgur.com/81RtXfT.jpg" alt="Rocketseat" />
          <Column>
            <h3>Rocketseat</h3>
            <h4>Educational institution</h4>
            <time>{Math.floor(Math.random() * (24 - 1)) + 1}h</time>
          </Column>
        </Row>

        <PostImage src="https://blog.rocketseat.com.br/content/images/2019/05/Painel.png" alt="Rocketseat Blog" />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">{kFormatter(Math.floor(Math.random() * (10000 - 1)) + 1)}</span>
          <span className="number">•</span>
          <span className="number">{`${kFormatter(Math.floor(Math.random() * (10000 - 1)) + 1)} Comments`}</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button type="button" data-tip="React to the post">
            <LikeIcon />
            <span>Like</span>
          </button>
          <button type="button" data-tip="Comment on the post">
            <CommentIcon />
            <span>Comment</span>
          </button>
          <button type="button" data-tip="Share post">
            <ShareIcon />
            <span>Share</span>
          </button>
          <button type="button" data-tip="Send post">
            <SendIcon />
            <span>Send</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
