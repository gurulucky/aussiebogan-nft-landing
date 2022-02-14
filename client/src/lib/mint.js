import Web3 from 'web3'
import { NFT_ABI } from './abi.js'
import { TOKEN_URIS } from './ABC2-M_summary.js'

const rinkebynet = 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const mainnet = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const web3 = new Web3(mainnet)
const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
const eth_usd = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, eth_usd)

const NFT_ADDRESS = '0xfFA4683b9aC4aAD95416804f4cac0e23f527F63c'
const PRICE = 0.05

export const mint = async (account, amount) => {
    let abc_contract = new window.web3.eth.Contract(NFT_ABI, NFT_ADDRESS);
    let tokenCounter = Number(await abc_contract.methods.totalSupply().call());
    let mintUris = TOKEN_URIS.slice(tokenCounter, tokenCounter + amount);
    console.log('mint tokenUris', mintUris);
    let res = await abc_contract.methods.mint(mintUris).send({ from: account, value: window.web3.utils.toWei((PRICE * amount).toString(), "ether") })
    return res.status
}

export const getTotalMinted = async () => {
    let web3 = new Web3(rinkebynet)
    let abc_contract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS);
    let tokenCounter = Number(await abc_contract.methods.totalSupply().call());
    console.log('totalminted', tokenCounter)
    return tokenCounter;
}

export const getTokenUris = async (tokenIds) => {
    let web3 = new Web3(rinkebynet)
    let abc_contract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS);
    let tokenUris = []
    for (let i = 0; i < tokenIds.length; i++) {
        tokenUris.push(await abc_contract.methods.tokenURI(tokenIds[i]).call())
    }
    return tokenUris
}

export const hasEnoughEth = async (account, amount) => {
    try {
        let balance = await window.web3.eth.getBalance(account);
        // console.log(balance, window.web3.utils.toWei((PRICE * amount).toString, "ether"));
        if (isBigger(String(balance), String(window.web3.utils.toWei((PRICE * amount).toString(), "ether"))) >= 0) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err.message);
        return false;
    }
}

export const isBigger = (x, y) => {
    x = x || "0";
    y = y || "0";
    if (x.length > y.length) y = "0".repeat(x.length - y.length) + y;
    else if (y.length > x.length) x = "0".repeat(y.length - x.length) + x;

    for (let i = 0; i < x.length; i++) {
        if (x[i] < y[i]) return -1;
        if (x[i] > y[i]) return 1;
    }
    return 0;
}

export const getEthPrice = async () => {
    try {
        let ethPrice = (await priceFeed.methods.latestRoundData().call()).answer / (10 ** 8)
        console.log("ETH / USD", ethPrice)
        return ethPrice
    } catch (err) {
        console.log(err.message)
        return 0
    }
}