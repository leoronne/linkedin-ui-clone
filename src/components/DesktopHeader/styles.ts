import styled from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';

export const Container = styled.div`
  background: var(--color-header);
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: block;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  max-width: 1128px;
  margin: 0 auto;
  height: 52px;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .line {
    height: 100%;
    border-left: 1px solid var(--color-nav-border);
    width: 1px;
  }

  .right nav {
    height: 100%;
  }

  @media (max-width: 1024px) {
    .line {
      display: none;
    }
  }
`;

export const LinkedInIcon = styled(GrLinkedin)`
  height: 34px;
  width: 34px;
  color: var(--color-linkedin);
  background-color: #fff;
  border-radius: 4px;
  flex-shrink: 0;
  cursor: pointer;
  transition-duration: 167ms;
  &:hover {
    transition-duration: 167ms;
    transform: scale(1);
    height: 28px;
    width: 28px;
  }
`;
