import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import {
  auctionFinalizeAction,
  auctionGetMyMoney,
  auctionMyBidAction,
} from '$reduxsaga/request/auction_request';
import { AuctionDivider, AuctionStyledButton } from '../style';

const MyBidBox = ({ gapTime, highestBid, owner }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { product } = router.query;
  const [auctionState, setAuctionState] = useState('');

  const { userData } = useSelector(state => state.user);
  const { myBidData, auctionData } = useSelector(state => state.auction);

  useEffect(() => {
    let data = {
      product,
      metamask: userData?.metamask,
    };
    dispatch(auctionMyBidAction(data));
  }, [dispatch, product, userData]);

  useEffect(() => {
    setAuctionState(auctionData.auctionState);
  }, [auctionData]);

  const onClickAuction = useCallback(async () => {
    let data = {
      product,
      metamask: userData.metamask,
    };

    dispatch(auctionFinalizeAction(data));
  }, [dispatch, product, userData]);

  const onClickGetMyMoney = useCallback(async () => {
    let data = {
      product,
      metamask: userData.metamask,
    };

    dispatch(auctionGetMyMoney(data));
  }, [dispatch, product, userData]);

  return (
    <>
      {myBidData !== 0 && (
        <>
          <>my total bid - {myBidData} ETH</>
          {parseFloat(highestBid) !== parseFloat(myBidData) && (
            <>
              <button onClick={onClickGetMyMoney}>Get it back</button>
            </>
          )}

          <AuctionDivider />
        </>
      )}
      {gapTime && (
        <>
          {((userData?.metamask === owner && auctionState !== '2') ||
            myBidData !== 0) && (
            <AuctionStyledButton onClick={onClickAuction}>
              Get it back
            </AuctionStyledButton>
          )}
        </>
      )}
    </>
  );
};

MyBidBox.prototype = {
  gapTime: PropTypes.bool.isRequired,
};

export default MyBidBox;
