import { Link } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Stack, TextField, Button, InputBase } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------


const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const ButtonStyle = styled(Button)(({ theme }) => (
  {
    borderRadius: 0,
    minWidth: '10px',
    backgroundColor: '#0f2938'
  }
));

const ConnectButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  width: '200px'
}))

// ----------------------------------------------------------------------

export default function Minting() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <MotionInView variants={varFadeInDown}>
          <Stack direction='column'
            sx={{
              p: 3,
              border: '1px solid #0E77B7',
              backgroundImage: 'repeating-linear-gradient(45deg,#0b1414,#0b1414 10px,#061724 10px,#061724 20px)'
            }}
            spacing={5} alignItems='center'
          >
            <Stack direction='column'>
              <Typography className='flux_title' variant="h2" color='primary.main' sx={{ textAlign: 'center' }}>
                Mint ABC NFTs
              </Typography>
              <Stack direction='row' spacing={1} justifyContent='center'>
                <Typography variant="h6" color='common.white'>
                  Total minted:
                </Typography>
                <Typography variant='h6' color='primary.main'>3200 / 10000</Typography>
              </Stack>
            </Stack>
            <Stack direction='column'>
              <Typography variant='h6' color='common.white' textAlign='center'>0.05 Eth + Gas fee</Typography>
              <Typography variant='h6' color='common.white' textAlign='center'>Max 20 ABCs per transactions</Typography>
            </Stack>
            <Stack direction='row' justifyContent='center' spacing={1}>
              <Stack direction='row' sx={{ border: '1px solid #0E77B7', p: '5px', backgroundColor: '#0f2938' }}>
                <ButtonStyle variant='outlined'>-</ButtonStyle>
                <InputBase variant='outlined' type='number'
                  fullWidth={true}
                  inputProps={{
                    min: 1, max: 20,
                    sx: { textAlign: 'center' },
                  }}
                />
                <ButtonStyle variant='outlined'>+</ButtonStyle>
              </Stack>
              <ButtonStyle variant='outlined'>10</ButtonStyle>
              <ButtonStyle variant='outlined'>15</ButtonStyle>
              <ButtonStyle variant='outlined'>20</ButtonStyle>
            </Stack>
            <ConnectButton variant='contained' size='large'>CONNECT WALLET</ConnectButton>
            <Link to='#'><Typography variant='body1'>View Contract</Typography> </Link>
          </Stack>
        </MotionInView>
      </Container>
    </RootStyle >
  );
}
