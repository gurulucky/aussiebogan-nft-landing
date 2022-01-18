import { NFT_ABI } from './abi.js'
import { TOKEN_URIS } from './ABC2-M_summary.js'

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
    let abc_contract = new window.web3.eth.Contract(NFT_ABI, NFT_ADDRESS);
    let tokenCounter = Number(await abc_contract.methods.totalSupply().call());
    return tokenCounter;
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