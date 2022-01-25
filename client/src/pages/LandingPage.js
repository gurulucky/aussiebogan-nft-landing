import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { scroller } from 'react-scroll';
// material
import { styled } from '@material-ui/core/styles';
import { Stack } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  Home,
  Minting,
  KeyInfo,
  BoganForever,
  Collection,
  Membership,
  Team,
  Roadmap,
  Faq
} from '../components/_external-pages/landing';
import AlertDialog from './AlertDialog'
// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  const { hash } = useLocation();
  useEffect(() => {
    console.log(hash);
    scroller.scrollTo(hash.replace('#', ''), {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  })
  return (
    <RootStyle title="Aussie Bogan" id="move_top">
      <Stack id='home'>
        <Home />

      </Stack>
      <ContentStyle>
        <Stack id='mint'>
          <Minting />

        </Stack>
        <Stack id='about'>

          <BoganForever />
        </Stack>
        <Stack id='collection'>

          <Collection />
        </Stack>
        <Membership />
        <Stack id='team'>

          <Team />
        </Stack>
        <Stack id='key'>
          <KeyInfo />
        </Stack>
        <Stack id="roadmap">
          <Roadmap />
        </Stack>
        <Stack id='faq'>
          <Faq />

        </Stack>
        <AlertDialog />
      </ContentStyle>
    </RootStyle>
  );
}
