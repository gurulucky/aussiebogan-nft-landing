import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography } from '@material-ui/core';
import { Icon } from '@iconify/react';
import allInclusiveBoxOutline from '@iconify/icons-mdi/all-inclusive-box-outline';
// routes
import { PATH_PAGE } from '../../../routes/paths';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------
const KEY_INFO = [
  ['Release Date', "TBA"],
  ['Total number of NFTs', '10,000'],
  ['NFTs withheld for sale', '500 for giveaways, marketing and the team'],
  ['Price', '0.05 ETH'],
  ['Token type', 'ERC-721'],
  ['Blockchain', 'Ethereum'],
  ['Unlockable content', 'Yes, high-resolution image'],
  ['File hosting', 'IPFS'],
  ['Royalties', '10% to fund ABC ongoing and new projects'],
  ['Number of traits', '16'],
  ['Number of attributes', '225'],
  ['Reveal type', 'Instant'],
  ['Smart contract', 'https://etherscan...']
];

const Root = styled(Box)`
  td,
  th {
    border: 1px solid #1CCAFF;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #1CCAFF;
  }
`;

const TableStyle = styled('table')(({ theme }) => ({
  borderCollapse:'collapse',
  // width:'100%',
  maxWidth:'800px',
  [theme.breakpoints.up('md')]: {
    margin:'auto',
    width:'100%'
  }
}));

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
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


// ----------------------------------------------------------------------

export default function KeyInfo() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  return (
    <RootStyle>
      <MotionInView variants={varFadeInDown}>
        <Typography className='flux_title' variant="h2" color='primary.main' sx={{ textAlign: 'center', mb:3 }}>
          Key Info
        </Typography>
      </MotionInView>
      <Root sx={{ maxWidth: '100%' }}>
        <TableStyle>
          <tbody>
            {
              KEY_INFO.map(info =>
                <tr>
                  <td><Typography variant='h6'>{info[0]}</Typography> </td>
                  <td><Typography variant='h6'>{info[1]}</Typography> </td>
                </tr>
              )
            }
          </tbody>
        </TableStyle>
      </Root>
    </RootStyle>
  );
}
