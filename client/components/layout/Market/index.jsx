import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import LeftSideBar from './leftSideBar/LeftSideBar';

import {
  AuctionLeftSideBar,
  AuctionWrapper,
  AuctionMainContentsContainer,
} from '$components/views/auctionpage/style';
import { Box, Button } from '@mui/material';

const MarketLayout = ({ children, value }) => {
  const { userData } = useSelector(state => state.user);

  return (
    <Box className="auctionAllContainer">
      <Box className="auctionMainContainer">
        {/* Header */}
        <Box className="auctionHeader">
          <h1>{value}</h1>
          {userData && userData.role === 1 && (
            <>
              {value === 'Auction' ? (
                <Link href={`/nft/auction/upload`}>
                  <Button
                    className="styledNewAuctionButton"
                    variant="contained"
                    sx={{
                      display: 'block',
                      backgroundColor: 'transparent',
                      padding: '6px 12px',
                      width: 'auto',
                      margin: '0 0 0 auto',
                      color: '#fff',
                      '&:hover': {
                        color: 'rgb(25, 118, 210)',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    Register a new auction
                  </Button>
                </Link>
              ) : (
                <Link href={`/mypage/mynft`}>
                  <Button
                    className="styledNewAuctionButton"
                    variant="contained"
                    sx={{
                      display: 'block',
                      backgroundColor: 'transparent',
                      padding: '6px 12px',
                      width: 'auto',
                      margin: '0 0 0 auto',
                      color: '#fff',
                      '&:hover': {
                        color: 'rgb(25, 118, 210)',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    Register a new sale
                  </Button>
                </Link>
              )}
            </>
          )}
        </Box>

        {/* Body */}
        <AuctionMainContentsContainer>
          {/* Menu */}
          <AuctionLeftSideBar>
            <LeftSideBar />
          </AuctionLeftSideBar>

          {/* Contents */}
          <AuctionWrapper>{children}</AuctionWrapper>
        </AuctionMainContentsContainer>
      </Box>
    </Box>
  );
};

export default MarketLayout;
