import React, { useState, useEffect } from 'react';

import { useTheme } from '../hooks';

import { DesktopHeader, AdBanner, LeftColumn, MiddleColumn, RightColumn } from '../components';

import { Container, VersionIcon } from './styles';

const Layout: React.FC = () => {
  const { changeTheme, themeName } = useTheme();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Container>
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>

      <div className="theme-container">
        <button type="button" onClick={changeTheme}>
          <VersionIcon />
          <span>{`Change to the ${themeName === 'new' ? 'old' : 'new'} version`}</span>
        </button>
      </div>
    </Container>
  );
};

export default Layout;
