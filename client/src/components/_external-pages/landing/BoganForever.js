import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography, Stack } from '@material-ui/core';
import { Icon } from '@iconify/react';
import allInclusiveBoxOutline from '@iconify/icons-mdi/all-inclusive-box-outline';
// routes
import { PATH_PAGE } from '../../../routes/paths';
import { MHidden } from '../../@material-extend';
//
import { varFadeInUp, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15)
  },
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
      : 'none'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12
    }
  }
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 }
};
const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 }
};
const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 }
};

// ----------------------------------------------------------------------

export default function BoganForever() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <ContentStyle>
            {/* <MHidden width='mdDown'> */}
            <MotionInView variants={varFadeInUp}>
              <Box component='img' src='/static/chief.png' />
            </MotionInView>

            {/* </MHidden> */}
          </ContentStyle>
        </Grid>

        <Grid item xs={12} md={6} dir="ltr">
          <ContentStyle>

            <MotionInView variants={varFadeInUp}>
              <Typography variant="h2" color='primary.main' className='flux_title' sx={{ mb: 3 }}>
                Bogans Forever
              </Typography>
              <Typography
                variant='h6'
                paragraph
              >
                In celebration of the contribution of your fellow bogan The Right Honourable Chief Justice Bogan AC QC ABC Esq. has officially launched the Aussie Bogan Club (ABC).
              </Typography>
              <Typography
                variant='h6'
                paragraph
              >
                The Aussie Bogan Club is a collection of 10,000 exclusive NFTs cohabiting in the shire of Boganville and the Ethereum blockchain being secured by a fearless smart contract that can never be altered or changed.
              </Typography>
              <Typography
                variant='h6'
                paragraph
              > Each ABC NFT is completely unique, randomly generated from a selection of over 220 hand drawn bogan traits.  Ownership of an ABC NFT doubles as your membership to the highly exclusively Aussie Bogan Club, which on its own brings bragging rights, a society of like-minded bogan socialites.
              </Typography>
            </MotionInView>
          </ContentStyle>
        </Grid>
      </Grid>
    </RootStyle >
  );
}
