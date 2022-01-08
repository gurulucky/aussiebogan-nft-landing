import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography, Stack, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Icon } from '@iconify/react';
import allInclusiveBoxOutline from '@iconify/icons-mdi/all-inclusive-box-outline';
// routes
import { PATH_PAGE } from '../../../routes/paths';
//
import { varFadeInUp, MotionInView } from '../../animate';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
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
const MEMBERSHIP_TEXT = [
  "Recognition of Australia’s First Peoples",
  "Respect for the freedom and dignity of your follow bogan",
  "Freedom of religion",
  "Freedom of speech",
  "Freedom of association",
  "Tolerance",
  "Compassion for those in need",
  "Equality of opportunity for all",
  "Boganship(mateship)",
  "Easy - going and informal",
  "Common sense",
  "Humility"
];

export default function Membership() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography className='flux_title' variant="h2" color='primary.main' sx={{ mb: 3 }}>
                  Membership to the Aussie Bogan Club
                </Typography>
                <List dense={false}>
                  {
                    MEMBERSHIP_TEXT.map(item =>
                      <ListItem>
                        <ListItemIcon>
                          <LoyaltyIcon sx={{color:'primary.main'}}/>
                        </ListItemIcon>
                        <Typography variant='h6'>{item}</Typography>
                      </ListItem>
                    )
                  }
                </List>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={6} dir="ltr">
            <ContentStyle>
                  <Box component='img' src='/static/gif.gif'/>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
