import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scroller } from 'react-scroll';
// material
import { styled } from '@material-ui/core/styles';
import { Stack, Grid, Typography } from '@material-ui/core';
// components
import Page from '../../components/Page';
import NftItem from './NftItem';
import AlertDialog from '../AlertDialog'
import {StyledCircleProgress} from '../styled/StyledInput'
//actions
import { getNFTs } from '../../actions/manager';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // paddingTop: theme.spacing(15),
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15)
  },
  minHeight: window.innerHeight + 'px'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative'
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  const dispatch = useDispatch()
  const nftIds = useSelector(state => state.auth.user?.nftIds)
  const [nfts, setNfts] = useState([])
  const [loadingAssets, setLoadingAssets] = useState(false)

  useEffect(() => {
    if (nftIds) {
      getNfts(nftIds)
    }
  }, [nftIds])

  const getNfts = async () => {
    setLoadingAssets(true)
    setNfts(await getNFTs(nftIds))
    setLoadingAssets(false)
  }

  return (
    <RootStyle title="Aussie Bogan" id="move_top">
      {
        loadingAssets &&
        <Stack direction='row' justifyContent='center' alignItems='center'>
          <StyledCircleProgress />
          <Typography variant="body1" color="white" sx={{ marginLeft: "15px" }}>Loading now, please wait... </Typography>
        </Stack>
      }
      <Grid container>
        {
          nfts?.map(nft => <NftItem nft={nft} />)
        }
      </Grid>
      <AlertDialog />
    </RootStyle>
  );
}
