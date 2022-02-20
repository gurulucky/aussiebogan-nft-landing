import {
  SET_MODAL, SET_WALLET, SET_QUANTITY, SHOW_PAYMENT
} from './types';

import api from '../utils/api'
import axios from 'axios'
import { getTokenUris } from '../lib/mint';

export const setWallet = (wallet) => dispatch => {
  dispatch({
    type: SET_WALLET,
    payload: wallet
  })
}

export const setModal = (open, text) => dispatch => {
  dispatch({
    type: SET_MODAL,
    payload: { modalOpen: open, modalText: text }
  })
}

export const showPayment = (open) => dispatch => {
  dispatch({
    type: SHOW_PAYMENT,
    payload: open
  })
}

export const getNFTs = async (nftIds) => {
  try {
    if (nftIds.length === 0) {
      return []
    }
    let tokenURIs = await getTokenUris(nftIds)
    console.log(tokenURIs)
    let nfts = []
    for (let i = 0; i < tokenURIs.length; i++) {
      let nft = (await axios.get(tokenURIs[i])).data
      nfts.push({ ...nft, tokenId: nftIds[i] })
    }
    console.log('nfts', nfts)
    return nfts
  } catch (err) {
    console.log(err.message)
    return []
  }
}

export const setQuantity = (quantity) => dispatch => {
  dispatch({
    type: SET_QUANTITY,
    payload: quantity
  })
}

export const buyNFTs = async (amount) => {
  try {
    let res = await api.post('/users/buy', { amount })
    console.log(res.data)
    return res.data
  } catch (err) {
    console.log(err)
    return false
  }
}
