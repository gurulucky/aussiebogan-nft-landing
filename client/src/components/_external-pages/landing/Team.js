import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import chevronRightFill from '@iconify/icons-eva/chevron-right-fill';
// material
import { useTheme, styled, alpha } from '@material-ui/core/styles';
import { Box, Grid, Card, Link, Stack, Button, Divider, Container, Typography } from '@material-ui/core';
//
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const MEMBERS = [
  'Chief Bogan',
  'Technical Wiz',
  'Blockchain/NFT Geek',
  'Creative Type',
  'Artist Extraordinaire',
  'Marketing Guru'
];

const IMAGES = [
  '/static/team/chief.png',
  '/static/team/technical.png',
  '/static/team/blockchain.png',
  '/static/team/creative.png',
  '/static/team/artist.png',
  '/static/team/marketing.png'
]

const PLANS = [...Array(6)].map((_, index) => ({
  name: MEMBERS[index],
  image: IMAGES[index]
}));

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(7,15)
  }
}));

function PlanCard({ plan, cardIndex }) {
  const theme = useTheme();
  const { name, image } = plan;

  const isLight = theme.palette.mode === 'light';

  return (
    <Card
      sx={{
        p: 5,
        borderRadius:'0px',
        boxShadow: (theme) =>
          `0px 48px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.12)}`,
        ...(cardIndex === 1 && {
          boxShadow: (theme) =>
            `0px 48px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`
        })
      }}
    >
      <Stack spacing={1}>
        <div>
          <Typography variant="h6">{name}</Typography>
        </div>
        <Box component="img" src={image} sx={{ width: '100%', height: 'auto' }} />
      </Stack>
    </Card>
  );
}

export default function Team() {
  return (
    <RootStyle>
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Typography className='flux_title' variant="h2" color='primary.main' sx={{ mb: 3 }}>
              Team
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={5}>
          {PLANS.map((plan, index) => (
            <Grid key={plan.name} item xs={12} md={4}>
              <MotionInView variants={index === 1 ? varFadeInDown : varFadeInUp}>
                <PlanCard plan={plan} cardIndex={index} />
              </MotionInView>
            </Grid>
          ))}
        </Grid>
    </RootStyle>
  );
}
