/* eslint-disable */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container, Typography, Stack, IconButton, SvgIcon, Menu, MenuItem, ListItemIcon, Divider } from '@material-ui/core';
import { AccountCircle, Settings, Logout, Login, Collections } from '@material-ui/icons';
//////////////////////////
import { DiscordPath, TwitterPath, InstagramPath } from '../../components/SvgIcon';
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
import MyAvatar from '../../components/MyAvatar';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import { Link as ScrollLink } from 'react-scroll';
// ----------------------------------------------------------------------
import { logout } from '../../actions/auth';

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
  const dispatch = useDispatch()
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const role = useSelector(state => state.auth.user?.role);
  const isHome = pathname === '/';
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <a href='https://discord.gg/DbDQC9ep29' target='_blank'>
                <IconButton color='primary'>
                  <SvgIcon>{DiscordPath}</SvgIcon>
                </IconButton>
              </a>
              <a href='https://twitter.com/boganclub' target='_blank'>
                <IconButton color='primary'>
                  <SvgIcon>{TwitterPath}</SvgIcon>
                </IconButton>
              </a>
              <a href='https://www.instagram.com/aussie_bogan_club/' target='_blank'>
                <IconButton color='primary'>
                  <SvgIcon>{InstagramPath}</SvgIcon>
                </IconButton>
              </a>

              <IconButton onClick={handleClick} sx={{
                ml: 2,
                color: 'text.primary'
              }}>
                <MyAvatar />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                {
                  isAuthenticated ?
                    <div>
                      <RouterLink to='/user' style={{ textDecoration: 'none', color: 'white' }}>
                        <MenuItem>
                          <ListItemIcon>
                            <AccountCircle fontSize="small" />
                          </ListItemIcon>
                          My Account
                        </MenuItem>
                      </RouterLink>
                      <RouterLink to='/collection' style={{ textDecoration: 'none', color: 'white' }}>
                        <MenuItem>
                          <ListItemIcon>
                            <Collections fontSize='small' />
                          </ListItemIcon>
                          My Collection
                        </MenuItem>
                      </RouterLink>
                      <MenuItem onClick={() => dispatch(logout())}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </div>
                    :
                    <RouterLink to='/auth/login' style={{ textDecoration: 'none', color: 'white' }}>
                      <MenuItem>
                        <ListItemIcon>
                          <Login fontSize="small" />
                        </ListItemIcon>
                        Login
                      </MenuItem>

                    </RouterLink>
                }
              </Menu>
            </Stack>

          </MHidden>

          <MHidden width="mdUp">
            <Stack direction='row' spacing={1}>
              <a href='https://discord.gg/DbDQC9ep29' target='_blank'>
                <IconButton color='primary'>
                  <SvgIcon>{DiscordPath}</SvgIcon>
                </IconButton>
              </a>
              <a href='https://twitter.com/boganclub' target='_blank'>
                <IconButton color='primary'>
                  <SvgIcon>{TwitterPath}</SvgIcon>
                </IconButton>
              </a>
              <a href='https://www.instagram.com/aussie_bogan_club/' target='_blank'>
                <IconButton color='primary'>
                  <SvgIcon>{InstagramPath}</SvgIcon>
                </IconButton>
              </a>
              <IconButton onClick={handleClick} sx={{
                ml: 2,
                color: 'text.primary'
              }}>
                <MyAvatar />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                {
                  isAuthenticated ?
                    <div>
                      <RouterLink to='/user' style={{ textDecoration: 'none', color: 'white' }}>
                        <MenuItem>
                          <ListItemIcon>
                            <AccountCircle fontSize="small" />
                          </ListItemIcon>
                          My Account
                        </MenuItem>
                      </RouterLink>
                      <RouterLink to='/collection' style={{ textDecoration: 'none', color: 'white' }}>
                        <MenuItem>
                          <ListItemIcon>
                            <Collections fontSize='small' />
                          </ListItemIcon>
                          My Collection
                        </MenuItem>
                      </RouterLink>
                      <MenuItem onClick={() => dispatch(logout())}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </div>
                    :
                    <RouterLink to='/auth/login' style={{ textDecoration: 'none', color: 'white' }}>
                      <MenuItem>
                        <ListItemIcon>
                          <Login fontSize="small" />
                        </ListItemIcon>
                        Login
                      </MenuItem>

                    </RouterLink>
                }
              </Menu>
              <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            </Stack>
          </MHidden>
        </Container>
      </ToolbarStyle>
      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
