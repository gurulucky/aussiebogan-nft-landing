import { Link, NavLink, NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container, Typography, Stack, IconButton } from '@material-ui/core';
import { Icon } from '@iconify/react';
import discordFill from '@iconify/icons-akar-icons/discord-fill';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import { Link as ScrollLink } from 'react-scroll';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          bgcolor: 'background.default',
          height: { md: APP_BAR_DESKTOP - 16, xs: APP_BAR_MOBILE - 16 }
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box component={RouterLink}
            spy={true}
            smooth={true}
            to='/#home'
            sx={{ cursor: 'pointer' }}>
            <Logo header={true} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <Stack direction='row' spacing={1} alignItems='center'>
              <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
              <a href='https://discord.com/invite/dHSKjeGr' target='_blank'>
                <IconButton color='primary'>
                  <Icon icon={discordFill} />
                </IconButton>
              </a>
              <a href='https://twitter.com/boganclub' target='_blank'>
                <IconButton color='primary'>
                  <Icon icon={twitterFill} />
                </IconButton>
              </a>
              <a href='https://www.instagram.com/aussie_bogan_club/' target='_blank'>
                <IconButton color='primary'>
                  <Icon icon={instagramFill} />
                </IconButton>
              </a>
            </Stack>

          </MHidden>

          <MHidden width="mdUp">
            <Stack direction='row' spacing={1}>
              <a href='https://discord.com/invite/dHSKjeGr' target='_blank'>
                <IconButton color='primary'>
                  <Icon icon={discordFill} />
                </IconButton>
              </a>
              <a href='https://twitter.com/boganclub' target='_blank'>
                <IconButton color='primary'>
                  <Icon icon={twitterFill} />
                </IconButton>
              </a>
              <a href='https://www.instagram.com/aussie_bogan_club/' target='_blank'>
                <IconButton color='primary'>
                  <Icon icon={instagramFill} />
                </IconButton>
              </a>
              <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            </Stack>
          </MHidden>
        </Container>
      </ToolbarStyle>
      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
