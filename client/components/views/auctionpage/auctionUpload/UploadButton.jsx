import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { timeFunction } from '$util/timefunc';
import AuctionButton from '../auctionMui/AuctionButton';
import { createAuctionAction } from '$reduxsaga/request/auction_request';
import { web3 } from '$contracts';

const UploadButton = ({ endAt, startingBid, minimumBid, tokenID }) => {
  const { userData } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const account = userData.metamask;

  const onClickAuction = useCallback(() => {
    if (startingBid === '') {
      alert('Please check the amount again!');
      return;
    }
    if (minimumBid === '') {
      alert('Please double check your minimum bid!');
      return;
    }
    let date = timeFunction();
    if (date >= endAt) {
      alert('Please check the time again!');
      return;
    }
    let endTimestamp = Math.round(new Date(endAt).getTime() / 1000);

    let auctionData = {
      startingBid: web3.utils.toWei(startingBid, 'ether'),
      endTimestamp,
      tokenID: parseInt(tokenID),
      minimumBid: web3.utils.toWei(minimumBid, 'ether'),
      account,
    };

    dispatch(createAuctionAction(auctionData));
  }, [dispatch, startingBid, endAt, tokenID, minimumBid, account]);

  return (
    <>
      <AuctionButton text="Auction registration" func={onClickAuction} />
    </>
  );
};

UploadButton.propTypes = {
  endAt: PropTypes.string.isRequired,
  startingBid: PropTypes.string.isRequired,
  tokenID: PropTypes.string.isRequired,
};

export default UploadButton;
