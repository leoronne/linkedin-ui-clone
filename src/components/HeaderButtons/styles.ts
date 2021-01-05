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
    transition: var(--transition);
    position: relative;

    .notification-badge {
      background-color: #cc1016;

      width: 25px;
      height: 20px;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0;
      right: 0;

      border: var(--notification-badge-border);

      margin-right: 12px;
      margin-top: -3px;

      padding: 3px;

      p {
        color: white;

        font-weight: 600;
        font-size: 13px;
      }

      &.no-count {
        width: 20px !important;
        padding: 0 !important;

        .no-count-circle {
          background-color: white;
          width: var(--no-notification-badge-size);
          height: var(--no-notification-badge-size);
          border-radius: 50%;
          margin-top: 1px;
        }
      }
    }

    &:hover {
      color: var(--color-white);
      transition: var(--transition);
      svg {
        color: var(--color-icons-hover);
        fill: var(--color-icons-hover);
      }
      span {
        color: var(--color-icons-hover);
      }
    }
    &.active {
      border-bottom: 2px solid var(--color-icons-hover);
      color: var(--color-icons-hover);
      fill: var(--color-icons-hover);
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--color-icons);

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


    .notification-badge {

      width: 20px;
      height: 20px;

      margin-right: 5px;

      p {
        font-size: 10px;
      }
    }

      &.active {
        border-bottom: 0;
        color: var(--color-icons-hover);
        fill: var(--color-icons-hover);
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

  position: relative;
`;

export const SearchIcon = styled(FaSearch)`
  fill: var(--color-ad-text);
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  cursor: pointer;

  position: absolute;

  left: 0;
  margin-left: 10px;
  transition: opacity var(--transition);
  &:hover {
    opacity: 0.8;
    transition: opacity var(--transition);
  }
`;

export const SearchInput = styled.input`
  background: var(--color-input);
  color: var(--color-black);
  font-size: 14px;
  padding: 8px 8px 8px 40px;
  border: none;
  outline: none;
  border-radius: 2px;
  width: 100%;

  &:focus {
    background: var(--color-input-hover);
  }
`;
