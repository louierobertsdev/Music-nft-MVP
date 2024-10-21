import React from 'react';
import PropTypes from 'prop-types';
import { AuctionBox, AuctionGray, EthereumImg } from '../style';

const BidBox = ({ gapTime, highestBidder, auctionMinimumBid, highestBid }) => {
  return (
    <>
      {gapTime ? (
        <>
          <AuctionGray>Final winning bid</AuctionGray>
          <AuctionBox>
            <EthereumImg src="/ethereum-1.svg" alt="ethereum" />
            {highestBid}
          </AuctionBox>
          {highestBidder && (
            <AuctionGray>Successful bidder - {highestBidder}</AuctionGray>
          )}
        </>
      ) : (
        <>
          <AuctionGray>Current auction price</AuctionGray>
          <AuctionBox>
            <EthereumImg src="/ethereum-1.svg" alt="ethereum" />
            {highestBid}
          </AuctionBox>
          <AuctionGray>
            Current minimum winning bid amount - {auctionMinimumBid} ETH
          </AuctionGray>
          {highestBidder && (
            <AuctionGray>Current highest bidder - {highestBidder}</AuctionGray>
          )}
        </>
      )}
    </>
  );
};

BidBox.propTypes = {
  gapTime: PropTypes.bool.isRequired,
};

export default BidBox;
