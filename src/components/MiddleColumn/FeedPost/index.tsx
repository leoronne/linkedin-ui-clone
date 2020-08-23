import React from 'react';

import kFormatter from '../../../utils/kFormatter';

import Panel from '../../Panel';

import { Container, Row, PostImage, Separator, Avatar, Column, LikeIcon, CommentIcon, ShareIcon, SendIcon } from './styles';

interface PostProps {
  user: string;
  title: string;
  avatar: string;
}

const FeedPost: React.FC<PostProps> = ({ user, title, avatar }) => {
  const reactions = ['congrats', 'idea', 'like', 'love', 'support', 'think'];
  const slicedReactions = reactions.sort(() => 0.5 - Math.random()).slice(0, 3);
  const comments = kFormatter(Math.floor(Math.random() * (10000 - 1)) + 1);
  const likes = kFormatter(Math.floor(Math.random() * (10000 - 1)) + 1);
  const time = Math.floor(Math.random() * (24 - 1)) + 1;

  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src={avatar} alt="Rocketseat" />
          <Column>
            <h3>{user}</h3>
            <h4>{title}</h4>
            <time data-tip={`${user} posted ${time}h ago`}>{time}h</time>
          </Column>
        </Row>

        <PostImage src="https://blog.rocketseat.com.br/content/images/2019/05/Painel.png" alt="Rocketseat Blog" />

        <Row className="likes">
          {slicedReactions.map(reaction => (
            <span className={`circle ${reaction}`} key={reaction} />
          ))}
          <span className="number" data-tip={`${likes} users reacted to this post`}>
            {likes}
          </span>
          <span className="number">•</span>
          <span className="number" data-tip={`${comments} users commented on this post`}>{`${comments} Comments`}</span>
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
