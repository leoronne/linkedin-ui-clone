import styled, { css } from 'styled-components';
import { FaHashtag } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Groups } from '../../../styles/Icons';

export const Container = styled.div`
  position: sticky;
  top: 64px;

  > div {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    font-weight: 600;

    .title {
      color: var(--color-link);
      margin-bottom: 10px;
      height: 40px;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 10px;
      transition: var(--transition);
      &:hover {
        background-color: var(--cool-gray-20);
        transition: var(--transition);
      }
      > span {
        cursor: pointer;
        transition: var(--transition);
        &:hover {
          text-decoration: underline;
          transition: var(--transition);
        }
      }
    }

    .tags-list.hidden {
      display: none;
    }

    .tag {
      color: var(--color-gray);
      display: flex;
      align-items: center;
      padding: 3.5px 0;
      font-size: 12px;
      padding: 5px 10px;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background-color: var(--cool-gray-20);
        text-decoration: underline;
        transition: var(--transition);
      }
    }
    .discover {
      margin-top: 10px;
      border-top: 1px solid var(--color-separator);
      padding: 5px 10px;
      cursor: pointer;
      text-align: center;
      font-size: 16px;
      color: var(--color-gray);
      transition: var(--transition);
      &:hover {
        text-decoration: underline;
        transition: var(--transition);
      }
    }
  }
`;

const generalIconCSS = css`
  width: 16px;
  height: 16px;
  color: var(--color-hashtag);
  margin-right: 8px;
  cursor: pointer;
`;

export const UpIcon = styled(FiChevronUp)`
  ${generalIconCSS}
`;

export const DownIcon = styled(FiChevronDown)`
  ${generalIconCSS}
`;

export const HashtagIcon = styled(FaHashtag)`
  ${generalIconCSS}
`;

export const GroupsIcon = styled(Groups)`
  ${generalIconCSS}
  fill: var(--color-hashtag);
`;
