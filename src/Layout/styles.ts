/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Version } from '../styles/Icons';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  > span {
    margin-top: 48px;
    display: flex;
  }

  @media (min-width: 1180px) {
    > span {
      margin-top: 52px;
      padding: 8px 0;
    }
    > main {
      margin: 30px 30px 0 30px;
      display: flex;
      justify-content: center;
    }
  }

  .left-column,
  .right-column,
  .ad-banner {
    display: none;
  }

  .theme-container {
    position: sticky;
    bottom: 20px;
    right: 20px;
    margin-left: auto;

    width: 150px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      color: #666666;

      outline: 0 !important;
      border-radius: 35px;
      cursor: pointer;

      background: var(--color-white);
      box-shadow: 0 0 0 1px var(--panel-box-shadow), 0 2px 3px var(--panel-box-shadow);
      border: 1px solid var(--panel-box-shadow) !important;
      padding: 10px 15px !important;

      font-family: 'Roboto';

      &:hover {
        background: #eef3f8;
      }
    }
  }

  @media (min-width: 1180px) {
    .left-column,
    .right-column,
    .ad-banner {
      display: unset;
    }

    .middle-column {
      margin: 0 25px 16px;
    }
  }
`;

export const VersionIcon = styled(Version)`
  width: 25px;
  height: 25px;

  margin-right: 5px;

  fill: #666666;
`;
