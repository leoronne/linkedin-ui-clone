/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
  @media (min-width: 1180px) {
    width: 552px;
  }

  .seprator {
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .line {
      background-color: var(--color-hashtag);
      height: 1px;
      width: 70%;
    }
    > span {
      font-size: 14px;
      color: var(--color-hashtag);
      cursor: pointer;
      > strong {
        color: var(--color-black);
      }
    }
  }
`;

export const DownIcon = styled(FiChevronDown)`
  width: 16px;
  height: 16px;
  color: var(--color-black);
  fill: var(--color-black);
  margin-right: 8px;
  cursor: pointer;
`;
