/* eslint-disable */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Web3 from 'web3'
// material
import { useTheme, styled } from '@material-ui/core/styles';
// import { Typography, useMediaQuery, Stack,Button, InputBase } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Stack from '@material-ui/core/Stack'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
// import { LoadingButton } from '@material-ui/lab';
import LoadingButton from '@material-ui/lab/LoadingButton'
//
import { setAlert } from 'src/actions/manager';
import { hasEnoughEth, mint, getTotalMinted } from '../lib/mint';
// ----------------------------------------------------------------------
const NETWORK = 'rinkeby';
const RINKEBY_CHAINID = 4;
const MAINNET_CHAINID = 1;

const RootStyle = styled('div')(({ theme }) => ({
  // paddingTop: theme.spacing(15),
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15)
  }
}));

const ButtonStyle = styled(Button)(({ theme }) => (
  {
    borderRadius: 0,
    minWidth: '10px',
    backgroundColor: '#0f2938'
  }
));

const ConnectButton = styled(LoadingButton)(({ theme }) => ({
  borderRadius: 0,
  width: '200px'
}));


// ----------------------------------------------------------------------

export default function Test() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [account, setAccount] = useState('');
  const [initWeb3, setInitWeb3] = useState(false);
  const [minting, setMinting] = useState(false);
  const [totalMinted, setTotalMinted] = useState(0);

  useEffect(() => {
    if (window.ethereum && !initWeb3) {
      setInitWeb3(true);
      window.web3 = new Web3(window.ethereum);
      window.ethereum.on('accountsChanged', function (accounts) {
        // if (accounts[0] !== account) {
        console.log("change", accounts[0]);
        conMetamask();
        // }
      });
      window.ethereum.on('networkChanged', function (networkId) {
        if (Number(networkId) !== (NETWORK === 'rinkeby' ? RINKEBY_CHAINID : MAINNET_CHAINID)) {
          setAccount("");
          return;
        }
        conMetamask();
      });
      setTotal()
      // conMetamask();
    }
    // getRyoshiBalance(account, zksyncWallet);
  }, []);
  /// window.ethereum used to get addrss
  const conMetamask = async (e) => {
    // console.log(e);
    if (e && account) {
      setAccount("");
      return;
    }
    console.log('changed');
    if (window.ethereum) {
      try {
        // const addressArray = await window.ethereum.request({
        //   method: "eth_requestAccounts",
        // });
        // window.web3 = new Web3(window.ethereum);
        //   console.log("account",addressArray[0]);
        const chainId = await window.ethereum.request({
          method: "eth_chainId"
        });
        if (Number(chainId) !== (NETWORK === 'rinkeby' ? RINKEBY_CHAINID : MAINNET_CHAINID)) {
          dispatch(setAlert(true, `Connect to ${NETWORK} network on metamask.`));
          setAccount("");
          return;
        }
        const accounts = await window.ethereum.enable();
        console.log(accounts);
        // console.log(await window.web3.eth.getBalance(accounts[0]));
        setAccount(accounts[0] !== undefined ? accounts[0] : "");
        if (accounts[0]) {
          setMinting(true);
          if (await hasEnoughEth(accounts[0], quantity)) {
            if (await mint(accounts[0], quantity)) {
              dispatch(setAlert(true, `Minting ${quantity} NFTs succeed`));
              setTotal();
            }
          } else {
            dispatch(setAlert(true, `Insufficient funds. Check your wallet balance. You need 0.05 ETH + GAS fee at ${accounts[0]}`));
          }
          setMinting(false);
        }
      } catch (err) {
        setMinting(false);
      }
    } else {
      dispatch(setAlert(true, "Install web3 wallet"));
    }
  }

  const setTotal = async () => {
    let total = await getTotalMinted();
    setTotalMinted(total);
  }

  const changeQuantity = (e) => {
    if (e.target.value > 10) {
      return;
    }
    setQuantity(e.target.value);
  }

  return (
    <RootStyle>
        <Stack direction='column'
          sx={{
            p: 3,
            border: '1px solid #1CCAFF',
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
              <Typography variant='h6' color='primary.main'>{`${totalMinted} / 10000`}</Typography>
            </Stack>
          </Stack>

          <Stack direction='column'>
            <Typography variant='h6' color='common.white' textAlign='center'>0.05 Eth + Gas fee</Typography>
            <Typography variant='h6' color='common.white' textAlign='center'>Max 10 ABCs per transactions</Typography>
          </Stack>
          <Stack direction={isDesktop ? 'row' : 'column'} justifyContent='center' spacing={1}>
            <Stack direction='row' sx={{ border: '1px solid #0E77B7', p: '5px', backgroundColor: '#0f2938' }}>
              <ButtonStyle variant='outlined' onClick={() => setQuantity(quantity - 1 > 0 ? quantity - 1 : 1)}>-</ButtonStyle>
              <InputBase variant='outlined' type='number'
                fullWidth={true}
                inputProps={{
                  min: 1, max: 10,
                  sx: { textAlign: 'center' },
                }}
                value={quantity}
                onChange={changeQuantity}
              />
              <ButtonStyle variant='outlined' onClick={() => setQuantity(quantity + 1 <= 10 ? quantity + 1 : 10)}>+</ButtonStyle>
            </Stack>
            <Stack direction='row' spacing={1}>

              <ButtonStyle variant='outlined' onClick={() => setQuantity(3)}>3</ButtonStyle>
              <ButtonStyle variant='outlined' onClick={() => setQuantity(5)}>5</ButtonStyle>
              <ButtonStyle variant='outlined' onClick={() => setQuantity(10)}>10</ButtonStyle>
            </Stack>
          </Stack>
          <ConnectButton loading={minting} loadingPosition='start' variant='contained' size='large' onClick={conMetamask}>{`MINT ABC`}</ConnectButton>
          <a href='https://rinkeby.etherscan.io/address/0xfFA4683b9aC4aAD95416804f4cac0e23f527F63c' target='_blank'><Typography variant='body1'>View Contract</Typography> </a>
        </Stack>
    </RootStyle >
  );
}
