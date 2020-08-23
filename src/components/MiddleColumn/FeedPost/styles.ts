import styled, { css } from 'styled-components';

import { Comment, Like, Send, Share } from '../../../styles/Icons';

import congrats from '~/assets/svg/congrats.svg';
import idea from '~/assets/svg/idea.svg';
import like from '~/assets/svg/like.svg';
import love from '~/assets/svg/love.svg';
import support from '~/assets/svg/support.svg';
import think from '~/assets/svg/think.svg';

export const Container = styled.div`
  margin-top: 8px;

  @media (min-width: 1180px) {
    margin-top: 16px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 0 16px;

  &.heading {
    padding: 12px 0 8px;
    display: flex;
    align-items: center;

    h3 {
      font-size: 14px;
      color: var(--color-black);
      cursor: pointer;
    }
    h4,
    time {
      font-size: 12px;
      font-weight: normal;
      color: var(--color-gray);
      cursor: pointer;
    }
  }
  &.likes {
    padding: 8px 0;
    font-size: 12px;
    color: var(--color-gray);
    cursor: pointer;
    .circle {
      width: 16px;
      height: 16px;
      border-radius: 50%;

      &.love {
        background: url(${love}) no-repeat;
        background-size: cover;
      }

      &.congrats {
        background: url(${congrats}) no-repeat;
        background-size: cover;
      }

      &.idea {
        background: url(${idea}) no-repeat;
        background-size: cover;
      }

      &.like {
        background: url(${like}) no-repeat;
        background-size: cover;
      }

      &.support {
        background: url(${support}) no-repeat;
        background-size: cover;
      }

      &.think {
        background: url(${think}) no-repeat;
        background-size: cover;
      }

      & + .circle {
        margin-left: 4px;
      }
    }
    .number {
      margin-left: 8px;
      cursor: pointer;
    }
  }
  &.actions {
    justify-content: space-between;

    @media (min-width: 1180px) {
      justify-content: flex-start;
    }

    button {
      background: none;
      border: none;
      outline: none;
      color: var(--color-gray);
      font-size: 14px;
      font-weight: 600;

      display: flex;
      align-items: center;
      padding: 14px 8px;

      cursor: pointer;
      &:hover,
      &:focus {
        background: rgba(0, 0, 0, 0.05);
      }

      span {
        display: none;

        @media (min-width: 1180px) {
          display: unset;
        }
      }
    }
  }
`;

export const PostImage = styled.img`
  width: 100%;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid var(--color-separator);
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
`;

export const Column = styled.div`
  margin-left: 5px;
  cursor: pointer;
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
  fill: var(--color-hashtag);
`;

export const LikeIcon = styled(Like)`
  ${iconCSS}
`;

export const CommentIcon = styled(Comment)`
  ${iconCSS}
`;

export const ShareIcon = styled(Share)`
  ${iconCSS}
`;

export const SendIcon = styled(Send)`
  ${iconCSS}
`;
