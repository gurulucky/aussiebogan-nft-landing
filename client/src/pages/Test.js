/* eslint-disable */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import WertWidget from '@wert-io/widget-initializer';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES, ADAPTER_EVENTS, CustomChainConfig } from "@web3auth/base";
//
import { setModal, setQuantity, setWallet } from '../actions/manager';
import { hasEnoughEth, mint, getTotalMinted, getSignatureForMint, shortAddress } from '../lib/mint';
import AlertDialog from './AlertDialog';


const PRICE = Number(process.env.REACT_APP_PRICE)


// ----------------------------------------------------------------------
const NETWORK = process.env.REACT_APP_NETWORK;

const ethChainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x3",
  rpcTarget: `https://${NETWORK}.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
  displayName: `${NETWORK}`,
  blockExplorer: `https://${NETWORK}.etherscan.io/`,
  ticker: "ETH",
  tickerName: "Ethereum",
};
// We are initializing with EIP155 namespace which
// will initialize the modal with ethereum mainnet
// by default.
const web3auth = new Web3Auth({
  chainConfig: ethChainConfig,
  clientId: process.env.REACT_APP_CLIENT_ID // get your clientId from https://developer.web3auth.io
});

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
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  // const [quantity, setQuantity] = useState(1);
  const quantity = useSelector(state => state.manager.quantity)
  const wallet = useSelector(state => state.manager.wallet)
  const [initWeb3, setInitWeb3] = useState(false);
  const [minting, setMinting] = useState(false);
  const [buying, setBuying] = useState(false)
  const [web3authReady, setWeb3authReady] = useState(false)
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
        if (Number(networkId) !== Number(process.env.REACT_APP_ROPSTEN_ID)) {

          dispatch(setModal(true, `Connect to ${NETWORK} network.`));
          return;
        }
        conMetamask();
      });
      // conMetamask();
    } else {
      initWeb3Modal()
    }
    setTotal()
    // getRyoshiBalance(account, zksyncWallet);
  }, []);

  /// window.ethereum used to get addrss
  const conMetamask = async (e) => {
    // console.log(e);
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
        if (Number(chainId) !== Number(process.env.REACT_APP_ROPSTEN_ID)) {
          console.log(chainId)
          dispatch(setModal(true, `Connect to ${NETWORK} network on metamask.`));
          return;
        }
        const accounts = await window.ethereum.enable();
        console.log(accounts);
        // console.log(await window.web3.eth.getBalance(accounts[0]));
        if (accounts[0] && e) {
          setMinting(true);
          if (await hasEnoughEth(accounts[0], quantity)) {
            if (await mint(accounts[0], quantity)) {
              dispatch(setModal(true, `Minting ${quantity} NFTs succeed`));
              setTotal();
            }
          } else {
            dispatch(setModal(true, `Insufficient funds. Check your wallet balance. You need 0.05 ETH + GAS fee at ${accounts[0]}`));
          }
          setMinting(false);
        }
      } catch (err) {
        setMinting(false);
      }
    } else {
      dispatch(setModal(true, "Install web3 wallet"));
    }
  }

  const initWeb3Modal = async () => {
    setWeb3authReady(false)
    await web3auth.initModal();
    setWeb3authReady(true)
  }

  const login = async () => {
    try {
      await web3auth.connect();
      const web3 = new Web3(web3auth.provider);
      web3auth.provider.on('accountsChanged', function (accounts) {
        // if (accounts[0] !== account) {
        dispatch(setWallet(accounts[0]))
        console.log("change", accounts[0]);
        // }
      });
      web3auth.provider.on('networkChanged', function (networkId) {
        if (Number(networkId) !== Number(process.env.REACT_APP_ROPSTEN_ID)) {
          dispatch(setModal(true, `Connect to ${NETWORK} network.`));
          return;
        }
      });
      const address = (await web3.eth.getAccounts())[0];
      dispatch(setWallet(address))
      const balance = await web3.eth.getBalance(address);
      console.log(await web3auth.getUserInfo())
      console.log(address, balance)
    } finally {
    }
  };

  const logout = async () => {
    try {
      await web3auth.logout()
      dispatch(setWallet(""))
      console.log('logout')

    } catch (err) {
      console.log(err.message)
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
    dispatch(setQuantity(e.target.value));
  }

  const handleBuy = async () => {
    if (wallet) {
      buy()
    } else {
      login()
    }
  }

  const buy = async () => {
    setBuying(true)
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let signature = await getSignatureForMint(wallet, quantity)
    const signedData = signSmartContractData({
      address: wallet, //user wallet
      commodity: 'ETH',
      commodity_amount: (PRICE * quantity).toString(),
      pk_id: 'key1',
      sc_address: process.env.REACT_APP_NFT_ADDRESS,//ropsten abc contract
      sc_id: uuidv4(), // must be unique for any request
      sc_input_data: signature,
    }, privateKey);

    const otherWidgetOptions = {
      partner_id: process.env.REACT_APP_PARTNER_ID,
      container_id: 'widget',
      click_id: uuidv4(), // unique id of purhase in your system
      origin: 'https://sandbox.wert.io', // this option needed only for this example to work
      width: 400,
      height: 600,
    };

    const wertWidget = new WertWidget({
      ...signedData,
      ...otherWidgetOptions,
    });

    window.open(wertWidget.getRedirectUrl())
    setBuying(false)
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
          <Typography variant='h6' color='common.white' textAlign='center'>{`${PRICE} Eth + Gas fee`}</Typography>
          <Typography variant='h6' color='common.white' textAlign='center'>Max 10 ABCs per transactions</Typography>
        </Stack>
        <Stack direction={isDesktop ? 'row' : 'column'} justifyContent='center' spacing={1}>
          <Stack direction='row' sx={{ border: '1px solid #0E77B7', p: '5px', backgroundColor: '#0f2938' }}>
            <ButtonStyle variant='outlined' onClick={() => dispatch(setQuantity(quantity - 1 > 0 ? quantity - 1 : 1))}>-</ButtonStyle>
            <InputBase variant='outlined' type='number'
              fullWidth={true}
              inputProps={{
                min: 1, max: 10,
                sx: { textAlign: 'center' },
              }}
              value={quantity}
              onChange={changeQuantity}
            />
            <ButtonStyle variant='outlined' onClick={() => dispatch(setQuantity(quantity + 1 <= 10 ? quantity + 1 : 10))}>+</ButtonStyle>
          </Stack>
          <Stack direction='row' spacing={1}>

            <ButtonStyle variant='outlined' onClick={() => dispatch(setQuantity(3))}>3</ButtonStyle>
            <ButtonStyle variant='outlined' onClick={() => dispatch(setQuantity(5))}>5</ButtonStyle>
            <ButtonStyle variant='outlined' onClick={() => dispatch(setQuantity(10))}>10</ButtonStyle>
          </Stack>
        </Stack>
        {/* <Stack direction={isDesktop ? 'row' : 'column'} spacing={1}> */}
        {
          initWeb3 ?
            <ConnectButton loading={minting} loadingPosition='start' variant='contained' size='large' onClick={conMetamask}>{`MINT`}</ConnectButton>
            : web3authReady &&
            <>
              <ConnectButton loading={buying} loadingPosition='start' variant='contained' size='large' onClick={handleBuy}>
                {wallet ? `Mint using Cash / Fiat` : `Create Wallet Using Email`}
              </ConnectButton>
              {
                wallet &&
                <a href={`https://opensea.io/${wallet}`} target='_blank' style={{textDecoration:'none'}}>
                  <Typography variant='body1' color='primary.main'>
                    My collections
                  </Typography>
                </a>
              }
            </>
        }
        {/* </Stack> */}
        <a href={`https://${NETWORK}.etherscan.io/address/${process.env.REACT_APP_NFT_ADDRESS}`} target='_blank' style={{ textDecoration: 'none' }}>
          <Typography variant='body1' color='white'>View Contract</Typography>
        </a>
      </Stack>
      <AlertDialog />
    </RootStyle >
  );
}
