import styled from 'styled-components';

export default styled.div`
  background: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: 0 0 0 1px var(--panel-box-shadow), 0 2px 3px var(--panel-box-shadow);

  &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
  }

  > .tag {
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      text-decoration: underline;
      transition: var(--transition);
    }
  }
`;
