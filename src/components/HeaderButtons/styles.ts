import styled, { css } from 'styled-components';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

import { Home, Jobs, Messages, NetWork, Notifications, PostJob, Work } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;

  button {
    background: none;
    border: 0;
    outline: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 75px;
    min-height: 100%;
    color: var(--color-icons);
    cursor: pointer;
    &:hover {
      color: var(--color-white);
    }
    &:hover svg {
      color: var(--color-white);
      fill: var(--color-white);
    }
    &.active {
      border-bottom: 2px solid var(--color-white);
      color: var(--color-white);
      fill: var(--color-white);
    }
    &.active svg {
      fill: var(--color-white);
    }
    > span {
      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        margin-top: 2px;
        margin-left: 3px;
      }
    }
  }

  @media (max-width: 400px) {
    &#messages-button {
      display: none;
    }
  }

  @media (max-width: 449px) {
    &#notifications-button {
      display: none;
    }
  }

  @media (max-width: 498px) {
    &#network-button {
      display: none;
    }
  }

  @media (max-width: 594px) {
    &#jobs-button {
      display: none;
    }
  }

  @media (max-width: 768px) {
    &#work-button {
      display: none;
    }
    &#postjob-button {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    margin: 0 5px;
    button {
      min-width: 50px;
      &.active {
        border-bottom: 0;
        color: var(--color-white);
        fill: var(--color-white);
      }
      > span {
        display: none;
      }
    }
  }
`;

const generalIconCSS = css`
  width: 24px;
  height: 24px;
  color: var(--color-icons);
  fill: var(--color-icons);
`;

export const HomeIcon = styled(Home)`
  ${generalIconCSS}
`;

export const NotificationsIcon = styled(Notifications)`
  ${generalIconCSS}
`;

export const WorkIcon = styled(Work)`
  ${generalIconCSS}
`;

export const JobsIcon = styled(Jobs)`
  ${generalIconCSS}
`;

export const MessagesIcon = styled(Messages)`
  ${generalIconCSS}
`;

export const NetWorkIcon = styled(NetWork)`
  ${generalIconCSS}
`;

export const PostJobIcon = styled(PostJob)`
  ${generalIconCSS}
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  width: 16px;
  height: 16px;
`;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const SearchIcon = styled(FaSearch)`
  fill: var(--color-ad-text);
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  margin-left: -23px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchInput = styled.input`
  background: var(--color-input);
  color: var(--color-black);
  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px;
  width: 100%;

  &:focus {
    background: var(--color-white);
  }
`;
