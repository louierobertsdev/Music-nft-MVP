import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Box, CircularProgress } from '@mui/material';

import { AuctionStyledButton } from '../style';
import { useInput } from '$hooks/useInput';
import AuctionTextField from '../auctionMui/AuctionTextField';
import { auctionBidAction } from '$reduxsaga/request/auction_request';

const AuctionBidButton = ({ auctionMinimumBid }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { product } = router.query;

  const { userData } = useSelector(state => state.user);
  const { bidAuctionLoading, myBidData } = useSelector(state => state.auction);
  const [bid, onChangeBid] = useInput('');
  const [myBid, setMyBid] = useState();

  useEffect(() => {
    let bidInput = parseFloat(
      (parseFloat(myBidData) + parseFloat(bid)).toFixed(10),
    );
    setMyBid(bidInput);
  }, [bid]);

  const onClickAuction = useCallback(async () => {
    let data = {
      product,
      metamask: userData.metamask,
      bid,
    };

    dispatch(auctionBidAction(data));
  }, [dispatch, product, userData, bid]);

  return (
    <>
      {bidAuctionLoading ? (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress style={{ margin: '30px auto' }} color="inherit" />
        </div>
      ) : (
        <>
          <AuctionTextField value={bid} onChange={onChangeBid} uint={'ETH'} />

          {!isNaN(myBid) && (
            <>
              <Box
                style={{
                  display: 'inline',
                  color: '#dada',
                  marginRight: '10px',
                }}
              >
                expected bid price : {myBid} ETH
              </Box>
              {myBid < auctionMinimumBid && (
                <Box style={{ display: 'inline', color: '#ffd5009f' }}>
                  - It is lower than the possible winning bid amount.
                </Box>
              )}
            </>
          )}
          <AuctionStyledButton onClick={onClickAuction}>
            {myBidData === 0 ? <>Place a bid</> : <>Bid more</>}
          </AuctionStyledButton>
        </>
      )}
    </>
  );
};

export default AuctionBidButton;
