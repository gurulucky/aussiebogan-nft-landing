// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(15)
    }
}));

// ----------------------------------------------------------------------
const Scroll = styled(Box)(() => ({
    height: 256,
    background: 'url(/static/ss1.jpg)',
    backgroundSize: '5120px 256px',
    animation: 'mosaic 40s linear infinite',
    '@keyframes mosaic': {
        '0%': {
            backgroundPosition: '0 0'
        },
        '100%': {
            backgroundPosition: '-5120px 0'
        }
    }
}));

const Scroll_2 = styled(Box)(() => ({
    height: 256,
    background: 'url(/static/ss2.jpg)',
    backgroundSize: '5120px 256px',
    animation: 'mosaic 40s linear infinite',
    '@keyframes mosaic': {
        '0%': {
            backgroundPosition: '0 0'
        },
        '100%': {
            backgroundPosition: '-5120px 0'
        }
    }
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <RootStyle>
                <Box sx={{ mb: { xs: 3, md: 8 } }}>
                    <MotionInView variants={varFadeInDown}>
                        <Typography className='flux_title' variant="h2" color='primary.main' sx={{ textAlign: 'center' }}>
                            Collections
                        </Typography>
                        <Typography variant='h6' textAlign='center'>
                            The price of each ABC NFT card is 0.05 Ether, they are distributed on the Ethereum network, and there is a total of 10000 cards.
                        </Typography>
                    </MotionInView>
                </Box>
                <Scroll />
                <Scroll_2 />
        </RootStyle>
    );
}


