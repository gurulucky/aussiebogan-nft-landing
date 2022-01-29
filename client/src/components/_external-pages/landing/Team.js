import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import chevronRightFill from '@iconify/icons-eva/chevron-right-fill';
// material
import { useTheme, styled, alpha } from '@material-ui/core/styles';
import { Box, Grid, Card, Link, Stack, Button, Divider, Container, Typography, Avatar, Paper } from '@material-ui/core';
//
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const MEMBERS = [
  'Chief Bogan',
  'Bogan Project Manager',
  'Technical Wiz',
  'Blockchain/NFT Geek',
  'Artist Extraordinaire',
  'Support Artist',
  'Social Bogan',
  'Commercial & Marketing Guru',
  'Boring Accounting Type'
];

const IMAGES = [
  '/static/team/chief.png',
  '/static/team/project.png',
  '/static/team/technical.png',
  '/static/team/blockchain.png',
  '/static/team/artist.png',
  '/static/team/support.png',
  '/static/team/creative.png',
  '/static/team/marketing.png',
  '/static/team/accounting.png'
]

const DESCRIPTION = [
  "Experienced entrepreneur, with a strong technical background, having grown a start-up tech company to a multinational enterprise and listed on the ASX (Australian Securities Exchange).  Subsequently listed property focused, company on the ASX.  Extensive experience in leading start-up, small and large private and public organisations. Actively involved in a variety of businesses including a number of blockchain-based, technology businesses. Providing funding, vision, leadership, and ideas to Aussie Bogan Club. Passionate about bring ideas to life.",
  "The Team could not operate without Bogan PM and there would be no Aussie Bogan Club without her. She is the glue that keeps everyone working harmoniously together and focused on the job at hand. You can count of Bogan PM to grease the Bogan wheels of the project.  She also does things like scoping, scheduling, risk management, contingency planning, quality control and resourcing.  Sounds impressive?  She is impressive, and we’re glad she’s part of the Team.",
  "Highly qualified software engineer with over 5 years’ international, industry experience including extensive blockchain, web3, smart contract, tokens and fiat payment systems experience. Jointly responsible for UI, backend, minting engine, smart contract development and deployment of Aussie Bogan Club platform, including on-going technology management and enhancement.",
  "Master’s qualified in computer science with over 8 years’ international experience in all things blockchain, NFTs, smart contracts, random programmatic image generation, including development frameworks such as MEVN, MEAN, Laravel, node.js, and others (all the technical stuff required for our project). Jointly responsible for UI, backend, minting engine, smart contract development and deployment of Aussie Bogan Club, including on-going platform management and enhancement.",
  "Experienced international artist with raw talent and significant formal training in all things artist.  With over 15 years of experience in converting ideas and thoughts from concept drawings to final art including digital art.  Responsible for the conventionalisation, design and creation of the Aussie Bogan Club NFTs with collaboration and vision of the Team.",
  "Extremely experienced in his own right with over 10 years experience in the creation of digital art and digital design.  Responsible for aiding the Artist Extraordinaire including contributing to design thoughts and creative ideas, drawing style and techniques with the creation of the Aussie Bogan Club NFT artwork.",
  "All things social media including Discord, Instagram, Facebook, YouTube and Twitter.  Obsessed in social media, has no life, spends his awake-time on social media – poor guy.  Responsible for all things social media for Aussie Bogan Club, with assistance, input and guidance from the Team. ",
  "Former stockbroker and financial adviser, commercial and marketing savvy, with strong local and multinational network of contacts in a broad cross-section of industries and disciplines.  Able to speak underwater with gravel in his mouth (figuratively speaking), he can’t in reality.  Responsible for expanding the reach and exposure of Aussie Bogan Club including on-boarding specialist marketeers, on-going utility expansion and partner recruitment and engagement.",
  "Qualified accountant with over 4 years’ industry experience with start-up, small and large organisations.  Keen interest in all things blockchain, NFT and crypto generally.  Fervid (always wanted to use that word – means “passionate”) listed company share and cryptocurrency trader (including NFTs) and investor.  Providing financial management including cash-flow management, company compliance and formality to Aussie Bogan Club.  Always debates expense claim reimbursements!  Can’t I claim my recent NTF purchase as a business expense? "
]

const PLANS = [...Array(9)].map((_, index) => ({
  name: MEMBERS[index],
  image: IMAGES[index],
  description: DESCRIPTION[index]
}));

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 15)
  }
}));

function PlanCard({ plan, cardIndex }) {
  const theme = useTheme();
  const { name, image, description } = plan;

  const isLight = theme.palette.mode === 'light';

  return (
    <>
      <Stack direction='row' spacing={2} alignItems='center' sx={{ transform: 'translateY(25%)', zIndex: 10 }}>
        <div>
        </div>
        {/* <Box component="img" src={image} sx={{ width: '100%', height: 'auto' }} /> */}
        <Avatar src={image} sx={{ width: '192px', height: 'auto' }} />
        <Typography variant="h6">{name}</Typography>
      </Stack>
      <Paper
        sx={{
          zIndex: 1,
          p: 5,
          borderRadius: '0px',
          boxShadow: (theme) =>
            `0px 48px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.12)}`,
          ...(cardIndex === 1 && {
            boxShadow: (theme) =>
              `0px 48px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`
          })
        }}
      >
        <Typography sx={{ mt: 2 }}>{`${description}`} </Typography>
      </Paper>
    </>
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
