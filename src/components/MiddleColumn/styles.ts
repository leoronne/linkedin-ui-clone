/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
  padding: 15px;

  @media (min-width: 1180px) {
    width: 552px;
    padding: 0px;
  }

  .seprator {
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .line {
      background-color: var(--color-hashtag);
      height: 1px;
      width: 85%;
    }
    > span {
      padding: 0 5px;
      font-size: 14px;
      color: var(--color-hashtag);
      min-width: 105px;
      cursor: pointer;
      > strong {
        color: var(--color-black);
        margin-left: 5px;
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
