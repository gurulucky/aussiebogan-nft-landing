// material
import { styled } from '@material-ui/core/styles';
import { Stack } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  Home,
  Minting,
  BoganForever,
  Collection,
  Membership,
  Team,
  Roadmap,
  Faq
} from '../components/_external-pages/landing';

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
  return (
    <RootStyle title="Aussie Bogan" id="move_top">
      <Home />
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
        <Stack id="roadmap">
          <Roadmap />
        </Stack>
        <Stack id='faq'>
          <Faq />

        </Stack>
      </ContentStyle>
    </RootStyle>
  );
}
