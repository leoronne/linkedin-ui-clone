import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import DesktopHeader from '../components/DesktopHeader';
import AdBanner from '../components/AdBanner';
import LeftColumn from '../components/LeftColumn';
import MiddleColumn from '../components/MiddleColumn';
import RightColumn from '../components/RightColumn';

import { Container } from './styles';

const Layout: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
      <ReactTooltip place="bottom" type="dark" effect="solid" />
    </Container>
  );
};

export default Layout;
