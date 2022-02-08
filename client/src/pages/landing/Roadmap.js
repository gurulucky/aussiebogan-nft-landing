/* eslint-disable */
// material
import { useTheme, styled } from '@material-ui/core/styles';
// import { Box, useMediaQuery, Typography, ListItem, ListItemIcon, Stack } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Stack from '@material-ui/core/Stack'
// import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
//
import { MotionInView, varFadeInDown, varFadeInLeft, varFadeInRight } from '../../components/animate';
import CheckIcon from '@material-ui/icons/Check';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10,3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10,15)
  }
}));

const BorderStyle = styled(Stack)(({ theme }) => ({
  border: '1px solid #1CCAFF',
  borderLeft: '10px solid #1CCAFF',
  padding: '5px'
}))

const RoadmapItem = ({ title, contents }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <BorderStyle direction='column'>
      <Typography variant="h4" color='primary'>
        {title}
      </Typography>
      {
        contents.map(text =>
          <ListItem>
            <ListItemIcon>
              <LabelImportantIcon />
            </ListItemIcon>
            <Typography variant={matches ? 'h6' : 'body1'}>{text}</Typography>
          </ListItem>
        )
      }
    </BorderStyle>
  )
}

export default function Roadmap() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <RootStyle>
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <MotionInView variants={varFadeInDown}>
          <Typography className='flux_title' variant="h2" color='primary.main' sx={{ mb: 3 }}>
            Roadmap
          </Typography>
        </MotionInView>
      </Box>
      {
        matches ?
          <Timeline position='alternate'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary" variant="outlined">
                  <Typography variant='h4'>0%</Typography>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h4" color='primary'>
                  The Launch
                </Typography>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>2,500 ABC NFTs will be available for minting.</Typography>
                </ListItem>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary" variant="outlined">
                  <Typography variant='h4'>25%</Typography>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h4" color='primary.main' component="span">
                  ABC Airdrop
                </Typography>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>Exclusive for the first few collectors (randomly selected), Chief Bogan will airdrop 50 free NFTs.</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>Further 2,500 ABC NFTs will be made available for minting.</Typography>
                </ListItem>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary" variant="outlined">
                  <Typography variant='h4'>50%</Typography>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h4" color='primary' component="span">
                  More Giveaways
                </Typography>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>A further 50 ABC NFTs will be given away to existing collectors based on the number of their referrals.</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>Further 2,500 ABC NFTs will be made available for minting. </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>Metaverse research will commence and development of initial specifications for the decentralized ABC mate’s game.</Typography>
                </ListItem>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary" variant="outlined">
                  <Typography variant='h4'>75%</Typography>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h4" color='primary' component="span">
                  Further Release & Airdrop
                </Typography>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>A further 100 ABC NFTs will be given away to existing collectors based on the number of their referrals.</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>Chief Bogan will give away another 50 ABC NFTs to collectors on a randomly selected basis.</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>Balance of 5,000 ABC NFTs will be made available for minting.</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>Commence development of merchandise store and collection.</Typography>
                </ListItem>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary" variant="outlined">
                  <Typography variant='h4'>100%</Typography>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h4" color='primary' component="span">
                  Game Development StartsMore Giveaways
                </Typography>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>This is the new beginning.</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>In another act of generosity, Chief Bogan will give away a further 50 ABC NFTs to existing collectors based on a random basis as a big thank you from the Aussie Bogan Club. </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <Typography variant='h6'>Commence development of decentralized ABC mate’s game.</Typography>
                </ListItem>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          :
          <Stack direction='column' spacing={2}>
            <MotionInView variants={varFadeInLeft}>

              <RoadmapItem title='0% - The Launch' contents={['2,500 ABC NFTs will be available for minting.']} />
            </MotionInView>
            <MotionInView variants={varFadeInRight}>

              <RoadmapItem title='25% - ABC Airdrop'
                contents={[
                  'Exclusive for the first few collectors (randomly selected), Chief Bogan will airdrop 50 free NFTs.',
                  'Further 2,500 ABC NFTs will be made available for minting.'
                ]}
              />
            </MotionInView>
            <MotionInView variants={varFadeInLeft}>

              <RoadmapItem title='50% - More Giveaways'
                contents={[
                  'A further 50 ABC NFTs will be given away to existing collectors based on the number of their referrals.',
                  'Further 2,500 ABC NFTs will be made available for minting.',
                  'Metaverse research will commence and development of initial specifications for the decentralized ABC mate’s game.'
                ]}
              />
            </MotionInView>
            <MotionInView variants={varFadeInRight}>

              <RoadmapItem title='75% - Further Release & Airdrop'
                contents={
                  [
                    'A further 100 ABC NFTs will be given away to existing collectors based on the number of their referrals.',
                    'Chief Bogan will give away another 50 ABC NFTs to collectors on a randomly selected basis.',
                    'Balance of 5,000 ABC NFTs will be made available for minting.',
                    'Commence development of merchandise store and collection.'
                  ]
                }
              />
            </MotionInView>
            <MotionInView variants={varFadeInLeft}>

              <RoadmapItem title='100% - Game Development StartsMore Giveaways'
                contents={[
                  'This is the new beginning.',
                  'In another act of generosity, Chief Bogan will give away a further 50 ABC NFTs to existing collectors based on a random basis as a big thank you from the Aussie Bogan Club.',
                  'Commence development of decentralized ABC mate’s game.'
                ]}
              />
            </MotionInView>
          </Stack>
      }
    </RootStyle>
  );
}
