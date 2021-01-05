import styled, { css } from 'styled-components';

import { Article, Document, Photo, Video, Write } from '../../../styles/Icons';

export const Container = styled.div`
  color: var(--color-gray);
  padding: var(--post-container-margin);

  .write {
    display: flex;
    align-items: center;
    padding: 14px 24px;
    cursor: pointer;

    margin: var(--post-margin);

    border: var(--post-border);
    border-radius: var(--post-border-radius);
    transition: var(--transition);

    &:hover {
      background: rgba(0, 0, 0, 0.05);
      transition: var(--transition);
    }

    > span {
      margin-left: 16px;
      font-weight: 600;
    }
  }

  .attachment {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 24px;
      border-top: var(--post-separator);

      button {
        display: flex;
        padding: 16px;
        height: 100%;
        align-items: center;
        background: none;
        border: none;
        color: var(--color-gray);
        font-weight: 600;

        margin: 5px 0;
        border-radius: 5px;
        transition: var(--transition);

        cursor: pointer;
        &:hover,
        &:focus {
          background: rgba(0, 0, 0, 0.05);
          transition: var(--transition);
        }
      }
    }
  }
`;

export const WriteIcon = styled(Write)`
  width: 20px;
  height: 20px;
  fill: var(--color-hashtag);
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const CameraIcon = styled(Photo)`
  ${iconCSS}
  fill: #33aada;
`;

export const VideoCameraIcon = styled(Video)`
  ${iconCSS}
`;

export const DocumentIcon = styled(Document)`
  ${iconCSS}
  fill: #17afb8;
`;

export const ArticleIcon = styled(Article)`
  ${iconCSS}
  fill: #ef7e37;
`;
