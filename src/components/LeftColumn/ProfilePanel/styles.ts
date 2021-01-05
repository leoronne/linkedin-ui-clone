/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import background from '../../../assets/img/background.png';

import { Save } from '../../../styles/Icons';

export const Container = styled.div`
  padding-bottom: 12px;

  .premium-border {
    border-radius: 2px 2px 0 0;
    height: 4px;
    background: linear-gradient(45deg, var(--amber-50, #af9b62), var(--amber-30, #f1e8c5) 70%, var(--amber-50, #c5b583));
  }

  .profile-cover {
    width: 100%;
    height: 54px;
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .profile-picture {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid var(--color-white);
    box-shadow: inset 0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15)), 0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15));
    cursor: pointer;
    display: flex;
    margin: -38px auto 12px;
  }

  h1 {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: var(--color-black);
  }

  h2 {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: var(--color-gray);
    margin: 0 20px;
  }

  .separator {
    width: 100%;
    border-bottom: 1px solid var(--color-separator);
    margin: 16px 0 12px;
  }

  .saved-items {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 3px 10px;
    color: var(--color-gray);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      text-decoration: underline;
      transition: var(--transition);
    }

    > span {
      margin-left: 5px;
    }
  }

  .key-value {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    margin: 3px 12px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      text-decoration: underline;
      transition: var(--transition);
    }

    .key {
      color: var(--color-gray);
    }
    .value {
      color: var(--color-link);
    }
  }
`;

export const SaveIcon = styled(Save)`
  width: 16px;
  height: 16px;
  fill: var(--color-hashtag);
`;
