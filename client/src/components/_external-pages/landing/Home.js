import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, useMediaQuery } from '@material-ui/core';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  backgroundImage: "url('/static/bg.jpg')",
  backgroundSize: '100% auto',
  backgroundRepeat: 'no-repeat',
  marginTop: "60px",
  [theme.breakpoints.up('md')]: {
    backgroundSize: '100% auto',
    // top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    // display: 'flex',
    position: 'fixed',
    // alignItems: 'flex-start',
    // justifyContent:'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  // marginTop:'0px',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    // margin: 'unset',
    paddingTop: theme.spacing(8),
  }
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  // top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  // margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '72vh'
  },
  [theme.breakpoints.down('md')]: {
    right: '8%',
    width: 'auto',
    height: '36vh'
  }
}));

// ----------------------------------------------------------------------

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {/* <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} /> */}

        {/* <HeroImgStyle alt="hero" src="/static/chief_nft.png" variants={varFadeInUp} /> */}

        {/* <Container maxWidth="lg"> */}
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Typography variant={matches ? 'h1' : 'h2'} className='flux'>Aussie Bogan<br />Club</Typography>
          </motion.div>

        </ContentStyle>
        {/* </Container> */}
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
